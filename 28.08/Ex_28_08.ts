/*
Crie uma função genérica chamada encontrarMaiorElemento que receba um array de elementos comparáveis (números ou strings) e retorne o maior elemento do array. Certifique-se de que a função funcione corretamente para arrays de números e de strings.
*/

function obterElementoMaximo<T extends number | string>(lista: T[]): T {
    // Verifica se a lista está vazia e lança um erro se estiver
    if (lista.length === 0) {
        throw new Error("A lista não pode estar vazia.");
    }

    // Inicializa o elemento máximo como o primeiro da lista
    let maximo = lista[0];

    // Itera pelos elementos da lista para encontrar o máximo
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > maximo) {
            maximo = lista[i];  // Atualiza o máximo se o elemento atual for maior
        }
    }

    // Retorna o elemento máximo encontrado
    return maximo;
}

// Exemplo de uso:
const numeroMaximo = obterElementoMaximo([10, 20, 30]);  // 30
const palavraMaxima = obterElementoMaximo(['gato', 'elefante', 'zebra']);  // 'elefante'

console.log(numeroMaximo);  // Imprime 30
console.log(palavraMaxima);  // Imprime 'elefante'

/*
Implemente um decorator de método chamado medirTempoDeExecucao que meça o tempo que um método demora para ser executado. Aplique esse decorator a um método que simula a execução de uma tarefa, como calcular a soma de um array grande de números.
*/

function calcularTempoDeExecucao(alvo: any, nomePropriedade: string, descritor: PropertyDescriptor) {
    // Armazena a função original
    const metodoOriginal = descritor.value;

    // Substitui a função original por uma nova que mede o tempo de execução
    descritor.value = function (...args: any[]) {
        console.time(nomePropriedade);  // Inicia a medição do tempo
        const resultado = metodoOriginal.apply(this, args);  // Executa a função original
        console.timeEnd(nomePropriedade);  // Finaliza a medição e exibe o tempo no console
        return resultado;
    };

    return descritor;
}

class Computadora {
    @calcularTempoDeExecucao
    adicionarNumeros(lista: number[]): number {
        // Simula uma operação que pode demorar um pouco
        return lista.reduce((a, b) => a + b, 0);  // Soma todos os números da lista
    }
}

// Exemplo de uso:
const comp = new Computadora();
comp.adicionarNumeros([1, 2, 3, 4, 5]);  // Exibe o tempo de execução no console

/*
Crie uma função chamada verificarEmail que lance um erro personalizado EmailInvalidoError caso o email passado não contenha o caractere @. Utilize try/catch para capturar e tratar esse erro quando a função for chamada.
*/

class ErroDeEmailInvalido extends Error {
    constructor(mensagem: string) {
        super(mensagem);
        this.name = 'ErroDeEmailInvalido';  // Nome do erro customizado
    }
}

function validarEmail(email: string): void {
    // Verifica se o email contém o caractere '@'
    if (!email.includes('@')) {
        // Lança o erro personalizado caso o email seja inválido
        throw new ErroDeEmailInvalido('Email inválido: O email deve conter o caractere "@"');
    }

    console.log('Email válido!');
}

// Exemplo de uso:
try {
    validarEmail('usuario.com');  // Não contém '@', então lançará o erro
} catch (erro) {
    // Captura o erro e imprime a mensagem
    if (erro instanceof ErroDeEmailInvalido) {
        console.error(erro.message);  // Deve imprimir "Email inválido"
    }
}

/*
Crie uma função assíncrona chamada buscarDadosDaAPI que simule a busca de dados em uma API (utilize setTimeout para simular o tempo de espera). A função deve retornar os dados em caso de sucesso ou lançar uma exceção caso ocorra um erro. Utilize async/await para chamar essa função e trate possíveis erros usando try/catch.
*/

async function obterDadosDaAPI(): Promise<string> {
    // Simula uma chamada a uma API com um atraso usando setTimeout
    return new Promise((resolver, rejeitar) => {
        setTimeout(() => {
            const sucesso = Math.random() > 0.5;  // Simula 50% de chance de sucesso

            if (sucesso) {
                resolver('Dados recebidos da API');
            } else {
                rejeitar('Falha ao obter dados da API');
            }
        }, 2000);  // Simula um atraso de 2 segundos
    });
}

async function realizarBusca() {
    try {
        const dados = await obterDadosDaAPI();  // Aguarda a resposta da API
        console.log(dados);  // Exibe os dados recebidos
    } catch (erro) {
        // Captura e exibe erros
        console.error('Erro ao obter dados:', erro);
    }
}

realizarBusca();  // Simula a busca de dados com async/await
