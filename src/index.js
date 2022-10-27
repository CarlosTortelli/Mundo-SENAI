const express= require('express')
const cors = require('cors');
const database = require('./database/database.js')
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
    console.log(`oia o banco: ${database}`)
})

app.post("/rota", function(req, res){
    res.send('Formulario recebido')
})