var faker  = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function() {

        var firstName = faker.name.firstName() 
        var lastName = faker.name.lastName()  
        
        var data = {
            nome: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '1199999999',
            endereco: {
                cep: '07022241',
                rua: 'Rua Corredor São João',
                numero: '75',
                complemento: 'Apto 14',
                bairro: 'Gopoúva',
                cidade_uf: 'Guarulhos/SP'
    
            },
            metodo_entrega: 'Van/Carro',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }


}