/*
Exercício 1:
Objetivo: Trabalhar com interfaces e tipos de união.
Defina uma interface chamada Produto, que contenha as propriedades nome (string), preco (number) e categoria (string).
Defina um tipo de união chamado FormaPagamento, que pode ser 'dinheiro', 'cartão' ou 'pix'.
Crie uma função que receba um objeto do tipo Produto e o tipo de pagamento, e retorne uma mensagem contendo as informações do produto e a forma de pagamento escolhida.
*/

// Definição da interface Item
interface Item {
    titulo: string;
    valor: number;
    tipo: string;
}

// Definição do tipo de união MetodoPagamento
type MetodoPagamento = 'dinheiro' | 'cartão' | 'pix';

// Função que recebe um Item e um MetodoPagamento
function mostrarItemComPagamento(item: Item, metodo: MetodoPagamento): string {
    return `Item: ${item.titulo}, Tipo: ${item.tipo}, Valor: R$${item.valor.toFixed(2)}, Método de Pagamento: ${metodo}.`;
}

// Exemplo de uso
const itemExemplo: Item = { titulo: 'Notebook', valor: 3500, tipo: 'Tecnologia' };
const metodoPagamentoExemplo: MetodoPagamento = 'pix';

console.log(mostrarItemComPagamento(itemExemplo, metodoPagamentoExemplo));


/*
Exercício 2:
Objetivo: Utilizar interseção de tipos.
Defina dois tipos: Pessoa e Empregado. O tipo Pessoa deve conter as propriedades nome (string) e idade (number). O tipo Empregado deve conter as propriedades empresa (string) e salario (number).
Usando interseção de tipos, crie um tipo que combine Pessoa e Empregado.
Crie uma função que receba um objeto desse tipo combinado e retorne uma mensagem que descreva o nome, idade, empresa e salário da pessoa.
*/
// Definição dos tipos Individuo e Funcionario
type Individuo = {
    nome: string;
    idade: number;
  };
  
  type Funcionario = {
    organizacao: string;
    remuneracao: number;
  };
  
  // Tipo combinado utilizando interseção
  type IndividuoFuncionario = Individuo & Funcionario;
  
  // Função que recebe um IndividuoFuncionario
  function mostrarDetalhesFuncionario(funcionario: IndividuoFuncionario): string {
    return `Nome: ${funcionario.nome}, Idade: ${funcionario.idade}, Organização: ${funcionario.organizacao}, Remuneração: R$${funcionario.remuneracao.toFixed(2)}.`;
  }
  
  // Exemplo de uso
  const individuoFuncionarioExemplo: IndividuoFuncionario = { nome: 'Mariana', idade: 40, organizacao: 'InovaTech', remuneracao: 9500 };
  
  console.log(mostrarDetalhesFuncionario(individuoFuncionarioExemplo));
  
/*
2) Exercícios de Classes e Herança:
Exercício 1:
Objetivo: Criar uma classe e uma subclasse usando herança.
Crie uma classe chamada Funcionario, com as propriedades nome (string), cargo (string) e salario (number).
Adicione um método que retorne uma descrição do funcionário.
Crie uma subclasse chamada Gerente, que herda de Funcionario e adiciona a propriedade departamento (string).
Adicione um método na classe Gerente que retorne uma descrição detalhada, incluindo o departamento que o gerente supervisiona.
*/
// Definição da classe Colaborador
class Colaborador {
    constructor(public nome: string, public posicao: string, public salario: number) {}
  
    descricao(): string {
      return `Colaborador: ${this.nome}, Posição: ${this.posicao}, Salário: R$${this.salario.toFixed(2)}`;
    }
  }
  
  // Definição da subclasse Supervisor
  class Supervisor extends Colaborador {
    constructor(nome: string, posicao: string, salario: number, public setor: string) {
      super(nome, posicao, salario);
    }
  
    descricaoDetalhada(): string {
      return `${super.descricao()}, Setor: ${this.setor}`;
    }
  }
  
  // Exemplo de uso
  const supervisorExemplo = new Supervisor('Roberto', 'Supervisor de TI', 12000, 'Inovação');
  
  console.log(supervisorExemplo.descricaoDetalhada());
  
/*
Exercício 2:
Objetivo: Trabalhar com herança e sobrescrita de métodos.
Crie uma classe chamada ContaBancaria com as propriedades titular (string) e saldo (number).
Adicione um método exibirSaldo, que imprime o saldo atual da conta.
Crie uma subclasse chamada ContaCorrente, que herda de ContaBancaria e adiciona a propriedade limiteCredito (number).
Sobrescreva o método exibirSaldo na subclasse ContaCorrente para incluir o saldo mais o limite de crédito disponível.
*/
// Definição da classe ContaFinanceira
class ContaFinanceira {
    constructor(public proprietario: string, public saldoAtual: number) {}
  
    mostrarSaldo(): string {
      return `Proprietário: ${this.proprietario}, Saldo: R$${this.saldoAtual.toFixed(2)}`;
    }
  }
  
  // Definição da subclasse ContaInvestimento
  class ContaInvestimento extends ContaFinanceira {
    constructor(proprietario: string, saldoAtual: number, public limiteInvestimento: number) {
      super(proprietario, saldoAtual);
    }
  
    // Sobrescrita do método mostrarSaldo
    mostrarSaldo(): string {
      const saldoComInvestimento = this.saldoAtual + this.limiteInvestimento;
      return `${super.mostrarSaldo()}, Saldo Total com Investimento: R$${saldoComInvestimento.toFixed(2)}`;
    }
  }
  
  // Exemplo de uso
  const contaInvestimentoExemplo = new ContaInvestimento('Mariana', 8000, 3000);
  console.log(contaInvestimentoExemplo.mostrarSaldo());
  
/*
3) Exercícios de Módulos e Namespaces:
Exercício 1:
Objetivo: Organizar o código usando módulos.
Crie um módulo chamado Cliente.ts, que exporta uma classe Cliente com as propriedades nome (string) e email (string).
Crie um segundo módulo chamado Pedido.ts, que importará a classe Cliente e adicionará a classe Pedido, com as propriedades cliente (objeto do tipo Cliente), produto (string) e valor (number).
Instancie objetos da classe Pedido e crie uma função que exiba o nome do cliente, o produto e o valor total do pedido.
*/

/*
Exercício 2:
Objetivo: Utilizar namespaces para organizar o código.
Crie um namespace chamado Financeiro, que contenha duas funções: calcularImposto (recebe o valor e a taxa de imposto) e calcularDesconto (recebe o valor e a taxa de desconto).
Dentro do namespace, adicione uma classe Orcamento, com as propriedades valorTotal (number) e itens (array de strings).
Crie um arquivo separado onde você utilizará esse namespace, instanciando a classe Orcamento e utilizando as funções de cálculo de imposto e desconto para modificar o valor total.
*/