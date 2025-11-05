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

    // Verifica se o número inicial (campo "de") é maior ou igual ao número final (campo "até")
    // Caso isso aconteça, o intervalo seria inválido (ex: de 10 até 5)
    // Nesse caso, exibe um alerta informando o erro ao usuário
    // E usa 'return' para encerrar a execução da função (nada mais abaixo será executado)
    if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
    }

    // Verifica se a quantidade de números solicitada é maior do que o total possível dentro do intervalo
    // Exemplo: se o intervalo é de 1 a 5, há apenas 5 números possíveis.
    // Se o usuário pedir 10 números, é impossível sem repetir.
    // Nesse caso, o programa alerta o erro e encerra a função.
    if (quantidade > (ate - de + 1)) {
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return;
    }

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

// Declara uma função chamada "reiniciar"
// Ela é responsável por limpar os campos e redefinir o estado da aplicação
function reiniciar() {

    // Limpa o valor digitado no campo de input com id "quantidade"
    // O campo fica vazio novamente, pronto para um novo sorteio
    document.getElementById('quantidade').value = '';

    // Limpa o campo "de", que representa o número inicial do intervalo
    document.getElementById('de').value = '';

    // Limpa o campo "até", que representa o número final do intervalo
    document.getElementById('ate').value = '';

    // Atualiza o conteúdo da área de resultado para o estado inicial
    // Exibe uma mensagem padrão informando que ainda não há números sorteados
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';

    // Chama a função "alterarStatusBotao"
    // Essa função altera o estado do botão "Reiniciar" (ativa ou desativa)
    alterarStatusBotao();
}
