/* const h2 = document.querySelector('.show-date')
const date = new Date()

function getDiaSemanaTexto (diaSemana) {
    let diaSemanaTexto
    switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo'
        break;

        case 1:
            diaSemanaTexto = 'segunda'
        break;

        case 2:
            diaSemanaTexto = 'terça'
        break;

        case 3:
            diaSemanaTexto = 'quarta'
        break;

        case 4:
            diaSemanaTexto = 'quinta'
        break;

        case 5:
            diaSemanaTexto = 'sexta'
        break;

        case 6:
            diaSemanaTexto = 'sabado'
        break;

    default: 
        diaSemanaTexto=''
        break;
    }
    return diaSemanaTexto
}

function getMes(diaMes){
    let diaMesTexto
    switch (diaMes) {
        case 0:
            diaMesTexto = 'Janeiro'
            break;
            
            case 1:
            diaMesTexto = 'Fevereiro'
            break;

            case 2:
            diaMesTexto = 'Março'
            break;

            case 3:
            diaMesTexto = 'Abril'
            break;

            case 4:
            diaMesTexto = 'Maio'
            break;

            case 5:
            diaMesTexto = 'Junho'
            break;

            case 6:
            diaMesTexto = 'Julho'
            break;

            case 7:
            diaMesTexto = 'Agosto'
            break;

            case 8:
            diaMesTexto = 'Setembro'
            break;

            case 9:
            diaMesTexto = 'Outubro'
            break;

            case 10:
            diaMesTexto = 'Novembro'
            break;

            case 11:
            diaMesTexto = 'Dezembro'
            break;
    
        default:
            diaMesTexto = ''
            break;
    }
    return diaMesTexto
}

function zeroEsquerda(num){
    return num >= 10 ? num : `0${num} `
}

function creatDate(date){
    const diaSemana = date.getDay()
    const diaMes = date.getMonth()

    const nomeDia = getDiaSemanaTexto(diaSemana)
    const nomeMes = getMes(diaMes)

    return (
        `${nomeDia}, ${date.getDate()} de ${nomeMes}`+
        ` de ${date.getFullYear()} a ${zeroEsquerda(date.getHours())}:${zeroEsquerda(date.getMinutes())}`
    )
}

h2.innerHTML = (creatDate(date)) */

const h2 = document.querySelector('.show-date')
const data = new Date()

const opcoes = {
    dateStyle: 'full'
}

h2.innerHTML = data.toLocaleDateString('pt-BR', opcoes)