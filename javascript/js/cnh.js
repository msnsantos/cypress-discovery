function verificarIdade() {
    var nome = document.querySelector('input[name=nome]')
    var idade = document.querySelector('input[name=idade]')
    var idadeNum = parseInt(idade.value) //valor que será preenchido no campo.

    if (idade.value.length == 0) {
        alert('Idade é um campo obrigatório.')
        return //aborta o processo aqui.
    }

    if (idadeNum >= 18) {
        alert('Ok, você pode tirar sua CNH.') // Esssa mesnagem só será exibida se a idade for > 18
    } else if (idadeNum > 4) {
        alert('Você é menor de idade, por enquanto sugiro andar de Bike.')
    } else {
        alert('Melhor você tomar Leite.')

    }
}