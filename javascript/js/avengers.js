//API
var avengers = ['Tony Stark', 'Clint Barton', 'Natasha Romanoff', 'Steve Rogers', 'Bruce Banner', 'Scot Lang'] //avengers é um array

function listaVingadores() {
    var ul = document.getElementById('vingadores')
    ul.innerHTML = ''

    avengers.forEach(function (a) {

        var li = document.createElement('li') //pegaremos o elemento da li
        var text = document.createTextNode(a) //Lista da variavel a que consegue obter o texto de casa vingador
        li.appendChild(text)
        ul.appendChild(li)

    }) //foreach (subfunção que faz um loop na lista de vingadores) e recebe um função anonima que da acesso a uma função por vez.


}