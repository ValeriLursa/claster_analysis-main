const {Client} = require('pg');//const Client = require('pg').Client;

const client = new Client({
    user: "postgres",
    password: "admin",
    host: "localhost",
    post: 5432,
    database: "foreignStudyGrad"
})

client.connect()
.then(() => console.log("Great"))
.catch(e => console.log)
.finally(() => client.end())

