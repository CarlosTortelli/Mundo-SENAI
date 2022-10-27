const express= require('express')
const cors = require('cors');
const routes = require('./routes.js');
const controller = require('./controllers/controller')
const app= express()
const PORT= 3000

app.use(cors());
app.use(express.json());
app.use(routes)

const result = controller.insertCustomer({idade_visitante: "Zé", nome_visitante: 18, telefone_visitante: "SP", email_visitante: "carlinhos@gmail.com"})



app.get('/', function(req, res){
    console.log("ENTROU AQUI")
    res.send("Hello, World! 1.2")
})

app.listen(PORT, function(){
    console.log(`ta rodando na porta: ${PORT}`)
})