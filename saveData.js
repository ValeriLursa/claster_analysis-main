const Client = require('pg').Client;//const Client = require('pg').Client;
const express = require("express");
const app = express();
app.use(express.json())
app.use(express.static('public'))

const client = new Client({
    user: "postgres",
    password: "admin",
    host: "localhost",
    post: 5432,
    database: "foreignStudyGrad"
})
app.listen(8080, () => console.log("Web server"))
//html files
app.get("/", (req, res) => res.sendFile(`${__dirname}/index.html`))
app.get("/form/Theme1.html", (req, res) => {
    res.sendFile(`${__dirname}/form/Theme1.html`)
    //prov.seyHello()
})
//css files
app.get("/css/sitecss.css", (req, res) => res.sendFile(`${__dirname}/css/sitecss.css`))
app.get("/css/siteCssTableButton.css", (req, res) => res.sendFile(`${__dirname}/css/siteCssTableButton.css`))
app.get("/css/site.css", (req, res) => res.sendFile(`${__dirname}/css/site.css`))
app.get("/css/stylebutton.css", (req, res) => res.sendFile(`${__dirname}/css/stylebutton.css`))
//js files
//  start files
app.get("/js/form/scriptbutton.js", (req, res) => res.sendFile(`${__dirname}/js/form/scriptbutton.js`))
app.get("/js/form/scriptOnload.js", (req, res) => res.sendFile(`${__dirname}/js/form/scriptOnload.js`))
app.get("/js/form/scriptVhod.js", (req, res) => res.sendFile(`${__dirname}/js/form/scriptVhod.js`))
app.get("/fetch.js", (req, res) => res.sendFile(`${__dirname}/fetch.js`))
//  check files
app.get("/js/form/scriptProverka.js", (req, res) => res.sendFile(`${__dirname}/js/form/scriptProverka.js`))
app.get("/js/form/scriptTestPrilSuch.js", (req, res) => res.sendFile(`${__dirname}/js/form/scriptTestPrilSuch.js`))
app.get("/js/form/scriptTestColor.js", (req, res) => res.sendFile(`${__dirname}/js/form/scriptTestColor.js`))
app.get("/js/form/scriptTestSelect.js", (req, res) => res.sendFile(`${__dirname}/js/form/scriptTestSelect.js`))
app.get("/js/form/scriptTestMasClass.js", (req, res) => res.sendFile(`${__dirname}/js/form/scriptTestMasClass.js`))
//  clastering files
app.get("/js/klaster/Xk.js", (req, res) => res.sendFile(`${__dirname}/js/klaster/Xk.js`))
app.get("/js/klaster/maxMin.js", (req, res) => res.sendFile(`${__dirname}/js/klaster/maxMin.js`))
app.get("/js/klaster/object_rationing.js", (req, res) => res.sendFile(`${__dirname}/js/klaster/object_rationing.js`))
app.get("/js/klaster/norm_x.js", (req, res) => res.sendFile(`${__dirname}/js/klaster/norm_x.js`))
app.get("/js/klaster/norm_Xk.js", (req, res) => res.sendFile(`${__dirname}/js/klaster/norm_Xk.js`))
app.get("/js/klaster/euc_distance.js", (req, res) => res.sendFile(`${__dirname}/js/klaster/euc_distance.js`))
app.get("/js/klaster/main.js", (req, res) => res.sendFile(`${__dirname}/js/klaster/main.js`))
app.get("/js/klaster/klaster.js", (req, res) => res.sendFile(`${__dirname}/js/klaster/klaster.js`))
//  save data files
//app.get("/saveData.js", (req, res) => res.sendFile(`${__dirname}/saveData.js`))
//  different
//app.get("/lib/jquery/dist/jquery.min.js", (req, res) => res.sendFile(`${__dirname}/lib/jquery/dist/jquery.min.js`))
//app.get("/lib/bootstrap/dist/js/bootstrap.bundle.min.js", (req, res) => res.sendFile(`${__dirname}/lib/bootstrap/dist/js/bootstrap.bundle.min.js`))
//app.get("/lib/bootstrap/dist/js/bootstrap.bundle.min.js.map", (req, res) => res.sendFile(`${__dirname}/lib/bootstrap/dist/js/bootstrap.bundle.min.js.map`))

// app.get("/user", async (req, res) => {
//     const rows = await readUsers();
//     res.setHeader("content-type", "application/json")
//     res.send(JSON.stringify(rows))
// })

app.get("/attempt", async (req, res) => {
    const rows = await readAttempt();
    res.setHeader("content-type", "application/json")
    res.send(JSON.stringify(rows))
})

app.get("/theme", async (req, res) => {
    const rows = await readTheme();
    res.setHeader("content-type", "application/json")
    res.send(JSON.stringify(rows))
})

var guser = 1;
var gtheme = 1;
var count = 6;

app.post("/attempt", async (req, res) => {
    let result = {}
    try{
        const reqJson = req.body;
        await createAttempt(reqJson.id, reqJson.idUser, reqJson.idTheme, reqJson.result);
        count++;
        result.success = true;
    }
    catch(e){
        result.success=false;
    }
    finally{
        res.setHeader("content-type", "application/json")
        res.send(JSON.stringify(result))
    }
})

// app.delete("/attempt", async (req, res) => {
//     let result = {}
//     try{
//         const reqJson = req.body;
//         await deleteAttempt(reqJson.id);
//         count--;
//         result.success = true;
//     }
//     catch(e){
//         result.success=false;
//     }
//     finally{
//         res.setHeader("content-type", "application/json")
//         res.send(JSON.stringify(result))
//     }
// })

var flagStart = true;
if (flagStart) start();
else end();

async function start(){
    await connect();
}

async function end(){
    await disconnect()
}

async function connect(){
    try{
        await client.connect();
        console.log("Connect")
    }
    catch(e){
        console.error(`Failed to connect ${e}`)
    }
}

async function disconnect(){
    try{
        await client.end();
        console.log("Disconnet")
    }
    catch(e){
        console.error(`Failed to disconnect ${e}`)
    }
}

// async function readUsers(){
//     try{
//         const results = await client.query("select * from \"users\"");
//         return results.rows;
//     }
//     catch(e){
//         return [];
//     }
// }
async function readTheme(){
    try{
        const result = await client.query("select * from \"theme\" order by id asc");
        return result.rows;
    }
    catch(e){
        return [];
    }
}

async function readAttempt(){
    try{
        const results = await client.query("select * from \"attempt\" order by id asc");
        return results.rows;
    }
    catch(e){
        return [];
    }
}

async function createAttempt(id, user, theme, text){
    try{
        await client.query("insert into \"attempt\" (id, user_id, theme, result) values ($1, $2, $3, $4)", [id, user, theme, text]);
        return true;
    }
    catch(e){
        return false;
    }
}

// async function deleteAttempt(id){
//     try{
//         await client.query("delete from \"attempt\" where id = $1", [id]);
//         return true;
//     }
//     catch(e){
//         return false;
//     }
// }

