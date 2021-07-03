/*function funcao(){
    console.log(arguments)
}
funcao('shasuashasu', 'sausahasijnasan', 'gahagauhasuas')*/

//somar os parametros
function funcao(){
    let total = 0
    for (let argumentos of arguments){
        total += argumentos
    }
    console.log(total)
}
funcao(1, 22, 4, 5, 7, 192)