function maiorNumero(num1, num2){
    if(num1 > num2){
        return(`${num1} maior do que ${num2}`)
    }
    return(`${num2} maior do que ${num1}`)
    
}

console.log(maiorNumero(5, 79))

console.log('#########')

const ePaisagem = (largura, altura)=>{
    if (largura > altura){
        return `Imagem em modo paisagem`
    }
    return `a imagem não está em modo paisagem`
}

console.log(ePaisagem(400, 300))

console.log('#########')


function fizzBuzz(n){
    if (typeof n != 'number'){
        return n
    }
    if (n % 3 ===0 && n % 5 ===0 ){
        return `fizz buzz`
    }
    if (n % 3 ===0){
        return `fizz`
    }
    if (n % 5 ===0){
        return `buzz`
    }

    return n
}

for (i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i))
}