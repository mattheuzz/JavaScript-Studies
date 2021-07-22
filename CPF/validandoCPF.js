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
    
    return true
}

CPFValid.prototype.confirmCpf = function(pacialCpf){
    
}

const cpf = new CPFValid('705.484.450-52')
console.log(cpf.valid())
