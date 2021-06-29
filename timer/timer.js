function cirarHRSec(segundos){
    const date = new Date (segundos * 1000)
    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}

const clock = document.querySelector(".clock")
const init = document.querySelector(".init")
const stopp = document.querySelector(".stop")
const reset = document.querySelector(".reset")
let sec = 0
let timer

function initClock(){
    timer = setInterval(function(){
        sec++
        clock.innerHTML = cirarHRSec(sec)
    }, 1000)
}

document.addEventListener('click', function(e){
    const el = e.target
    if(el.classList.contains("reset")){
        clearInterval(timer)
        clock.innerHTML = "00:00:00"
        sec = 0
    }
    if(el.classList.contains("stop")){
        clearInterval(timer)
        clock.classList.add('stoped')
    }
    if(el.classList.contains("init")){
        clearInterval(timer)
        clock.classList.remove('stoped')
        initClock()
    }
})

/* init.addEventListener('click', function (evente){
    clock.classList.remove('stoped')
    clearInterval(timer)
    initClock()
})

stopp.addEventListener('click', function (evente){
    clearInterval(timer)
    clock.classList.add('stoped')
})

reset.addEventListener('click', function (evente){
    clearInterval(timer)
    clock.innerHTML = "00:00:00"
    sec = 0
}) */