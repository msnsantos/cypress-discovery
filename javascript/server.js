const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.json({message: 'Hello Cypress Discovery'})
})

app.get('/avengers', function (req, res) {
    var avengers = ['Tony Stark', 'Clint Barton', 'Natasha Romanoff', 'Steve Rogers', 'Bruce Banner', 'Scot Lang'] //avengers é um array
    return res.json({data: avengers})

})

app.get('/cnh', function (req, res) {
    const idade = req.query.idade

    if (!idade) {
        return res.json({message: 'Idade é um campo obrigatório.'})
        
    }
    var idadeNum = parseInt(idade)

    if (idadeNum >= 18) {
        return res.json({message: 'Ok, você pode tirar sua CNH.'}) // Esssa mesnagem só será exibida se a idade for > 18
    } else if (idadeNum > 4) {
        return res.json({message: 'Você é menor de idade, por enquanto sugiro andar de Bike.'})
    } else {
        return res.json({message: 'Melhor você tomar Leite....'})

    }
})

app.listen(3000)