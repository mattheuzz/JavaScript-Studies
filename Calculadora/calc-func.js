function Calculadora(){
    this.display = document.querySelector('.display')

    this.inicia = () => {
        this.catchEnter()
        this.catchCliks()
    }

    this.catchEnter = () => {
        document.addEventListener('keypress', e=>{
            if (e.keyCode !== 13) return
            this.addEqDisplay()
        })
    }

    this.catchCliks = () => {
        document.addEventListener('click', e =>{
            const el = e.target
            if (el.classList.contains('bt-num')) this.addNumDisplay(el)
            if (el.classList.contains('bt-clear')) this.addClearDisplay()
            if (el.classList.contains('bt-del')) this.addDelDisplay()
            if (el.classList.contains('bt-eq')) this.addEqDisplay()
        })
    }

    this.addClearDisplay = () =>{
        this.display.value = ""
    }

    this.addDelDisplay = () =>{
        this.display.value = this.display.value.slice(0, -1)
    }

    this.addNumDisplay = el =>{
        this.display.value += el.innerText
        this.display.focus()
    }

    this.addEqDisplay = () =>{
        try{
            const count = eval(this.display.value)
            if(!count){
                alert("Conta Invalida")
                return
            }

            this.display.value = count

        } catch(e){
            alert('erro')
            return
        }
    }
}

const calculadora = new Calculadora()
calculadora.inicia()
