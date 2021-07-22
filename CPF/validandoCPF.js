function CPFValid (cpfEnv){
    Object.defineProperty(this, 'cpfClean', {
        get: () =>{
            return cpfEnv.replace(/\D+/g, '')
        }
    })
}

CPFValid.prototype.valid = function(){
    if(typeof this.cpfClean === 'undefined') return false
    if(this.cpfClean.length !== 11) return false
    if(this.isSequence()) return false

    const cpfPartial = this.cpfClean.slice(0, -2)
    const digit1 = this.confirmCpf(cpfPartial)
    const digit2 = this.confirmCpf(cpfPartial + digit1)

    const newCpf = cpfPartial + digit1 + digit2
    
    return newCpf === this.cpfClean
}

CPFValid.prototype.confirmCpf = function(parcialCpf){
    const cpfArray = Array.from(parcialCpf)
    
    let regressive = cpfArray.length +1
    const total = cpfArray.reduce((acc, val) => {
        acc += regressive*Number(val)
        regressive--
        return acc
    }, 0)
    const digit = 11 - (total % 11)
    return digit > 9 ? '0' : String(digit)
}

CPFValid.prototype.isSequence = function(){
    const verifySequency = this.cpfClean[0].repeat(this.cpfClean.length)
    return verifySequency === this.cpfClean

}

const cpf = new CPFValid('705.484.450-52')
console.log(cpf.valid())
