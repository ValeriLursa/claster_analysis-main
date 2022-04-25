var firstStart = true

var db = openDatabase("db", "0.1", "db", 1)
if (!db) {console.log("Error open DB")} else {
    //подумать
    if (firstStart) start()
    else {
        firstStart = false
        console.log("second")
    }
}

//firstStart
function start(){
    // creatTable("user")
    // creatTable("theme")
    // insertDB("user", 1, "user", "")
    // insertDB("theme", 1, "Тема 1. Что изучает информатика?", "")
    selectTheme("theme", "name", 1)
}

async function insertAttempt(i, result){
    //deleteItem("attempt", 1)
    //insertDB("attempt", i, 1, 1, result);
}

//creat Table
function creatTable(nameTable){
    switch(nameTable){
        case ('user'):{
            db.transaction(function(tx){
                tx.executeSql("CREATE TABLE user (id INTEGER UNIQUE, name TEXT)",
                [],
                function(){
                    console.log("Creat table user")
                },
                function(){
                    console.log("Error creat table user")
                })
            })
            break;
        }
        case ('theme'):{
            db.transaction(function(tx){
                tx.executeSql("CREATE TABLE theme (id INTEGER UNIQUE, name TEXT)",
                [],
                function(){
                    console.log("Creat table theme")
                },
                function(){
                    console.log("Error creat table theme")
                })
            })
            break;
        }
        case ('attempt'):{
            db.transaction(function(tx){
                tx.executeSql("CREATE TABLE attempt (id INTEGER UNIQUE, idUser INTEGER, idTheme INTEGER, result TEXT)",
                [],
                function(){
                    console.log("Creat table attempt")
                },
                function(){
                    console.log("Error creat table attempt")
                })
            })
            break;
        }
    }
}

//select name theme
function selectTheme(nameTable, itemTable, id){
    queryStr = "SELECT " + itemTable +" FROM " + nameTable + " WHERE id = " + id;
    var resultSelect;
    db.transaction(function(tx){
        tx.executeSql(queryStr,
        [],
        function (tx, result) { 
                //вывод результата селекта
                console.log(result.rows.item(0)[itemTable]);
                resultSelect = result.rows.item(0)[itemTable];
                var element = document.getElementById("Theme")
                element.innerText = resultSelect
                console.log("Select table", nameTable, "item", itemTable)
            },
        function (){
            console.log("Error select table", nameTable)
            //creatTable(nameTable)
        })
    })
    return resultSelect;
}

//select result Attempt
function selectTheme(nameTable, itemTable, id){
    queryStr = "SELECT " + itemTable +" FROM " + nameTable + " WHERE id = " + id;
    var resultSelect;
    db.transaction(function(tx){
        tx.executeSql(queryStr,
        [],
        function (tx, result) { 
                //вывод результата селекта
                console.log(result.rows.item(0)[itemTable]);
                resultSelect = result.rows.item(0)[itemTable];
                var element = document.getElementById("Theme")
                element.innerText = resultSelect
                console.log("Select table", nameTable, "item", itemTable)
            },
        function (){
            console.log("Error select table", nameTable)
            //creatTable(nameTable)
        })
    })
    return resultSelect;
}

//insert
async function insertDB(nameTable, i, id, name, result){
    switch(nameTable){
        case "user":{
            //insert user
            db.transaction(function(tx){
                tx.executeSql("INSERT INTO user (id, name) values(?, ?)",
                [id, name],
                function(){
                    console.log("Insert table", nameTable)
                },
                function(){
                    console.log("Error insert table", nameTable)
                })
            })
            break;
        }
        case "theme":{
            //insert user
            db.transaction(function(tx){
                tx.executeSql("INSERT INTO theme (id, name) values(?, ?)",
                [id, name],
                function(){
                    console.log("Insert table", nameTable)
                },
                function(){
                    console.log("Error insert table", nameTable)
                })
            })
            break;
        }
        case "attempt":{
            //Insert Attempt
            db.transaction(function(tx){
                tx.executeSql("INSERT INTO attempt (id, idUser, idTheme, result) values(?, ?, ?, ?)",
                [i, id, name, result],
                function(){
                    console.log("Insert table", nameTable)
                },
                function(){
                    console.log("Error insert table", nameTable)
                })
            })
            break;
        }
    }
}

function deleteItem(nameTable, id){
    var queryStr = "DELETE FROM " + nameTable + " WHERE id = ?" 
    db.transaction(function(tx){
        tx.executeSql(queryStr,
        [id],
        function(){
            console.log("Delete in table", nameTable)
        },
        function(){
            console.log("Error delete in", nameTable)
        })
    })
}