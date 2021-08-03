function Conta (agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
};

Conta.prototype.sacar = function(valor) {
    if(this.saldo <= valor){
        this.verSaldo()
        return
    }
    this.saldo -= valor
};

Conta.prototype.depositar = function(valor) {
    this.saldo += valor
};

Conta.prototype.verSaldo = function() {
    console.log(`Ag ${this.agencia} / ${this.conta}; Saldo: R$${this.saldo.toFixed(2)}`)
};

const conta = new Conta('BB', '12346', '223.00')

console.log(conta)
