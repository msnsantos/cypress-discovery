import signup from '../pages/signupPage'
import signupFactory from '../Factories/SignupFactory'

describe('Cadastro', () => { //Suite de testes de cadastro

    /*     beforeEach(function() {
    
            cy.fixture('deliver').then((d)=> {
                this.deliver = d
            })
    
        }) */

    it('Usuário deve se tornar um entregador', function () { //cenário de testes 

        var deliver = signupFactory.deliver()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        //Const é uma valor imutavel que não vai mudar
        signup.modalContentShouldBe(expectedMessage)

    })

    it('CPF incorreto', function () { //cenário de testes

        var deliver = signupFactory.deliver()
        deliver.cpf = '000000141MM'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')
    })

    it('email incorreto', function () { //cenário de testes

        var deliver = signupFactory.deliver()
        deliver.email = 'dmmsantos.hotmail.com'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! Email com formato inválido.')
    })

    context('Campos obrigatórios', function () {

        const messages = [
            { obrigatórios: 'name', output: 'É necessário informar o nome' },
            { obrigatórios: 'cpf', output: 'É necessário informar o CPF' },
            { obrigatórios: 'e-mail', output: 'É necessário informar o email' },
            { obrigatórios: 'cep', output: 'É necessário informar o CEP' },
            { obrigatórios: 'numero', output: 'É necessário informar o número do endereço' },
            { obrigatórios: 'delivery_method', output: 'Selecione o método de entrega' },
            { obrigatórios: 'cnh', output: 'É necessário informar o nome' }

        ]

        before(function(){
            signup.go()
            signup.submit()
        })

        messages.forEach(function(msg){
            it(`${msg.obrigatórios} is campos`, function(){
                signup.alertMessageShouldBe(msg.output)
            })



    })



})
}) 