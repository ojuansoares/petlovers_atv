import { log } from "console";
import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroProduto from "../negocio/cadastroProduto";
import CadastroServico from "../negocio/cadastroServico";
import CadastroPet from "../negocio/cadastroPet";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemProdutos from "../negocio/listagemProdutos";
import ListagemPets from "../negocio/listagemPets";
import DelecaoPet from "../negocio/delecaoPet";
import DelecaoCliente from "../negocio/delecaoCliente";
import AtualizacaoPet from "../negocio/atualizacaoPet";
import AtualizacaoCliente from "../negocio/atualizacaoCliente";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`\nOpções:`);
    console.log(`1 - Cadastro`);
    console.log(`2 - Listagem`);
    console.log(`3 - Atualizar`);
    console.log(`4 - Deletar`);
    console.log(`0 - Sair\n`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let subOpcao: number;
            do {
                console.log(`1 - Cadastrar cliente`);
                console.log(`2 - Cadastrar pet`);
                console.log(`3 - Cadastrar produto`);
                console.log(`4 - Cadastrar serviço`);
                console.log(`0 - Voltar\n`);
                
                subOpcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

                switch (subOpcao) {
                    case 1:
                        let cadastro = new CadastroCliente(empresa.getClientes)
                        cadastro.cadastrar()
                        break;
                    case 2:
                        let cadastroPet = new CadastroPet(empresa.getPets, empresa.getClientes)
                        cadastroPet.cadastrar()
                        break;
                    case 3:
                        let cadastroProduto = new CadastroProduto(empresa.getProdutos)
                        cadastroProduto.cadastrar()
                        break;
                    case 4:
                        let cadastroServico = new CadastroServico(empresa.getServicos)
                        cadastroServico.cadastrar()
                        break;                 
                    case 0:
                        console.log(`Voltando ao menu principal`)
                        break;
                    default:
                        console.log(`\nOperação não entendida :(`)
                }
            } while (subOpcao != 0)
            break;

        case 2:
            let subOpcao2: number;
            do {
                console.log(`1 - Listar todos os clientes`);
                console.log(`2 - Listar todos os pets`);
                console.log(`3 - Todos os produtos`);
                console.log(`0 - Voltar\n`);
                
                subOpcao2 = entrada.receberNumero(`Por favor, escolha uma opção: `)

                switch (subOpcao2) {
                    case 1:
                        let listagem = new ListagemClientes(empresa.getClientes)
                        listagem.listar()
                        break;
                    case 2:
                        let listagemPets = new ListagemPets(empresa.getClientes, empresa.getPets)
                        listagemPets.listar()
                        break;
                    case 3:
                        let listagemProdutos = new ListagemProdutos(empresa.getProdutos)
                        listagemProdutos.listar()
                        break;
                    case 0:
                        console.log(`Voltando ao menu principal`)
                        break;
                    default:
                        console.log(`\nOperação não entendida :(`)
                }
            } while (subOpcao2 != 0)
            break;

        case 3:
            let subOpcao3: number;
            do {
                console.log(`1 - Atualizar cliente`); 
                console.log(`2 - Atualizar pet`);
                console.log(`3 - Atualizar produto`);
                console.log(`4 - Atualizar serviço`);
                console.log(`0 - Voltar\n`);

                subOpcao3 = entrada.receberNumero(`Por favor, escolha uma opção: `)

                switch(subOpcao3) {
                    case 1:
                        let atualizacaoCliente = new AtualizacaoCliente(empresa.getClientes)
                        atualizacaoCliente.atualizar()
                        break;
                    case 2:
                        let atualizacaoPet = new AtualizacaoPet(empresa.getPets, empresa.getClientes)
                        atualizacaoPet.atualizar()
                        break;
                    case 3:
                        break;
                    case 4:
                        break;
                    case 0:
                        console.log(`Voltando ao menu principal`)
                        break;
                    default:
                        console.log(`\nOperação não entendida :(`)
                }
            } while (subOpcao3 != 0)
            break;

        case 4:
            let subOpcao4: number;
            do {
                console.log(`1 - Deletar cliente`);
                console.log(`2 - Deletar pet`);
                console.log(`3 - Deletar produto`);
                console.log(`3 - Deletar serviço`);
                console.log(`0 - Voltar\n`);
                
                subOpcao4 = entrada.receberNumero(`Por favor, escolha uma opção: `)

                switch (subOpcao4) {
                    case 1:
                        let delecaoCliente = new DelecaoCliente(empresa.getClientes, empresa.getPets)
                        delecaoCliente.deletar()
                        break;
                    case 2:
                        let delecaoPet = new DelecaoPet(empresa.getPets, empresa.getClientes)
                        delecaoPet.deletar()
                        break;
                    case 3:
                        break;
                    case 4:
                        break;
                    case 0:
                        console.log(`Voltando ao menu principal`)
                        break;
                    default:
                        console.log(`\nOperação não entendida :(`)
                }
            } while (subOpcao4 != 0)
            break;

        case 0:
            execucao = false
            console.log(`\nAté mais`)
            break;
        default:
            console.log(`\nOperação não entendida :(`)
    }
}