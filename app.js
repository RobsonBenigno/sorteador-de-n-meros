// Declara uma função chamada "sortear"
// Ela será executada quando for chamada (por exemplo, ao clicar em um botão)
function sortear() {

    // Captura o valor digitado no campo de input com id "quantidade"
    // O .value sempre retorna uma string (texto), mesmo que o usuário digite números
    // Por isso usamos parseInt() para converter esse texto em número inteiro
    let quantidade = parseInt(document.getElementById('quantidade').value);

    // Captura o valor digitado no campo de input com id "de"
    // Representa o número inicial do intervalo
    let de = parseInt(document.getElementById('de').value);

    // Captura o valor digitado no campo de input com id "ate"
    // Representa o número final do intervalo
    let ate = parseInt(document.getElementById('ate').value);

    // Cria um array vazio chamado "sorteados"
    // Esse array servirá para armazenar os números sorteados sem repetição
    let sorteados = [];

    // Declara uma variável chamada "numero"
    // Ela será usada para armazenar temporariamente o número sorteado em cada repetição
    let numero;

    // Inicia um loop "for" que vai repetir o processo de sorteio várias vezes
    // A variável "i" começa em 0 e o loop roda enquanto "i" for menor que "quantidade"
    // Isso garante que a quantidade de números sorteados será exatamente a pedida pelo usuário
    for (let i = 0; i < quantidade; i++) {

        // Chama a função "obterNumeroAleatorio" passando o intervalo (de e até)
        // O número retornado pela função é armazenado na variável "numero"
        numero = obterNumeroAleatorio(de, ate);

        // O loop "while" impede que números repetidos sejam adicionados ao array "sorteados"
        // Enquanto o número sorteado já existir no array, o programa gera outro número
        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }

        // Quando o número sorteado é único (não está no array),
        // ele é adicionado ao final da lista com o método push()
        sorteados.push(numero);
    }

    // Obtém o elemento HTML com id "resultado"
    // Esse elemento será usado para mostrar os números sorteados na tela
    let resultado = document.getElementById('resultado');

    // Altera o conteúdo HTML dentro da div "resultado"
    // Usa template string para inserir o array de números sorteados no texto
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;

    // Chama a função "alterarStatusBotao"
    // Essa função vai habilitar ou desabilitar o botão de reiniciar, dependendo do estado atual
    alterarStatusBotao();
}

// Declara uma função chamada "obterNumeroAleatorio"
// Ela recebe dois parâmetros: min (valor mínimo) e max (valor máximo)
function obterNumeroAleatorio(min, max) {
    // Math.random() gera um número decimal aleatório entre 0 e 1 (ex: 0.2345)
    // Multiplicamos por (max - min + 1) para ajustar o intervalo
    // Math.floor() arredonda o número para baixo (remove as casas decimais)
    // Somamos +min para garantir que o menor número possível seja o valor mínimo informado
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Declara uma função chamada "alterarStatusBotao"
// Essa função é responsável por alternar a aparência e o estado do botão de reiniciar
function alterarStatusBotao() {

    // Busca no HTML o elemento com id "btn-reiniciar"
    // Esse é o botão que será habilitado ou desabilitado
    let botao = document.getElementById('btn-reiniciar');

    // Verifica se o botão contém a classe 'container__botao-desabilitado'
    // Essa classe indica que o botão está atualmente desativado (não clicável)
    if (botao.classList.contains('container__botao-desabilitado')) {

        // Se o botão está desabilitado, remove essa classe
        botao.classList.remove('container__botao-desabilitado');

        // E adiciona a classe 'container__botao' para deixá-lo habilitado e visível como ativo
        botao.classList.add('container__botao');

    } else {
        // Caso contrário, se o botão está ativo, o código faz o inverso:
        // Remove a classe 'container__botao' (ativa)
        botao.classList.remove('container__botao');

        // E adiciona a classe 'container__botao-desabilitado' (desativa o botão)
        botao.classList.add('container__botao-desabilitado');
    }
}
