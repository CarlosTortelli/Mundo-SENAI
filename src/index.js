const express= require('express')
const cors = require('cors');
const data = require('./database/database.js')
const routes = require('./routes.js');
const app= express()
const PORT= 3000

app.use(cors());
app.use(express.json());
app.use(routes)


app.get('/', function(req, res){
    console.log("ENTROU AQUI")
    res.send("Hello, World! 1.2")
})

app.listen(PORT, function(){
    console.log(`ta rodando na porta: ${PORT}`)
    console.log(`oia o banco ${data}`)
})