const form_IMC = document.querySelector("#form-IMC")

form_IMC.addEventListener('submit', function(e){
    e.preventDefault()
    const inputPeso = e.target.querySelector('#peso')
    const inputAltura = e.target.querySelector('#altura')

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if (!peso){
        showResult('Peso invalido', false)
        return
    }

    if (!altura){
        showResult('Altura invalida', false)
        return
    }

    const imc = calcIMC(altura, peso)
    const nivelIMC = checkNivelIMC(imc)

    const msg = `Seu IMC é ${imc} e seu nivel é ${nivelIMC}`

    showResult(msg, true)
    
})

function checkNivelIMC(imc){
    const nivel = [`Abaixo do peso`, `Peso Normal`, `Sobrepeso`, `Obesidade grau 1`, `Obesidade grau 2`, `Obesidade grau 3`]

    if(imc > 39.9){
        return nivel[5]
    } 
    if (imc >= 34.9){
        return nivel[4]
    } 
    if (imc >= 29.9){
        return nivel[3]
    } 
    if (imc >= 24.9){
        return nivel[2]
    } 
    if (imc >= 18.5){
        return nivel[1]
    } 
    if(imc <18.5){
        return nivel[0]
    }
}

function calcIMC(altura, peso){
    const IMC = peso/(altura*altura)
    return IMC.toFixed(2)
}

function creatP(){
    const p = document.createElement('p')
    return p
}

function showResult(msg, isValid){
    const result = document.querySelector('.result')
    result.innerHTML = ``
    p = creatP()
    p.innerHTML = msg
    result.appendChild(p)
}