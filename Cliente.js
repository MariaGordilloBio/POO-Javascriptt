// ByteBank = Nome,CPF e agência do cliente e saldo

//molde/estrutura a ser replicado para todos - classe
//atributos, campos ou propriedades da classe
export class Cliente {
  nome
  _cpf

  get cpf() {
    return this._cpf;
  }

constructor(nome, cpf) {
    this.nome =  nome;
    this._cpf = cpf; 
  }
}



