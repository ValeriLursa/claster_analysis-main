console.log("fetch.js")

function fgetAttempt(test){
    fetch('/attempt')
    .then(response => response.json())
    .then(responseText => {
        var qstr = ""
        // responseText[0].result.forEach(t=> qstr += "<p>" + t.id +" " + t.result +" " + t.hint+"</p>")
        // test.innerHTML = qstr
        console.log(responseText[0].result)
    });
}

// function fgetTheme(id){
//     var q = ""
    
//     console.log(q)
//     return q;
// }

function fpostAttempt(text){
    fetch('/attempt', {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(text)
    })
    .then(response => response.text())
    .then(responseText => console.log(responseText))
}

// function selectUser(){
//     fetch('http://localhost:8080/user',{
//     headers : { 
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//        }
//     })
//     .then(response => response.json())
//     .then(responseText => {
//         console.log(responseText)
//     });
// }

// function deleteAttempt(id){
//     console.log(id)
//     fetch('/attempt', {
//         method: "DELETE",
//         headers: {"Content-Type": "application/json" },
//         body: JSON.stringify(id)
//     })
//     .then(response => response.text())
//     .then(responseText => console.log(responseText))
// }