import {Cliente} from "./Cliente.js"
import {Conta} from "./Conta.js"

const conta1 = new Conta("cliente1",033)

//caso de saque
conta1.sacar(50)

//Criar novo cliente com características da classe - objeto/instância - constructor
const cliente1 = new Cliente("José", 42992)
