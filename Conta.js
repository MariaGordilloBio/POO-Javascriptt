import { Cliente } from "./Cliente.js";
//classe conta corrente
export class Conta {
  _saldo = 0 //indicação de campo privado
  _cliente 
  
  numeroDeContas = 0
  agencia
//método acessor de atributo privado
  set cliente(novoValor) {
//verifica se novoValor é instancia de Cliente para proteger atrib privado    
    if(novoValor instanceof Cliente) {
      this._cliente = novoValor
    }
  }
//pegar valor de cliente sendo instancia priv
  get cliente() {
    return this._cliente
  }
  get saldo() {
    return this._saldo
  }
  constructor(cliente, agencia) {
    this.cliente = cliente
    this.agencia = agencia
    ContaCorrente.numeroDeContas += 1
  }
  sacar(valor) {
    if (this.saldo > valor) {
      this.saldo -= valor
      return valor
    }
    return
  }
  depositar(valor) {
    if(valor <= 0) {
      return
    }
    this.saldo += valor 
  }
  transferir(valor,conta) {
    const valorSacado = this.sacar(valor)
  }
}
