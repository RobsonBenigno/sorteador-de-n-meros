// Declara uma função chamada "sortear"
// Ela será executada quando for chamada (por exemplo, ao clicar em um botão)
function sortear() {
    // Captura o valor digitado no campo de input com id "quantidade"
    // O .value sempre retorna uma string (texto), mesmo que o usuário digite números
    // Por isso usamos parseInt() para converter esse texto em número inteiro
    let quantidade = parseInt(document.getElementById('quantidade').value);

    // Pega o valor digitado no campo com id "de" (número inicial)
    // Também converte de texto para número inteiro
    let de = parseInt(document.getElementById('de').value);

    // Pega o valor digitado no campo com id "ate" (número final)
    // Também converte para número inteiro
    let ate = parseInt(document.getElementById('ate').value);

    // Cria um array vazio chamado "sorteados"
    // Ele vai armazenar todos os números que forem sorteados
    let sorteados = [];

    // Declara uma variável "numero" que será usada para guardar temporariamente cada número sorteado
    let numero;

    // Inicia um loop "for" que vai repetir o sorteio várias vezes
    // A variável "i" começa em 0 e o loop roda até ser menor que "quantidade"
    // Isso significa que ele vai sortear exatamente a quantidade de números pedida pelo usuário
    for (let i = 0; i < quantidade; i++) {

    // Chama a função "obterNumeroAleatorio" passando como parâmetros o intervalo (de e até)
    // O valor retornado é guardado dentro da variável "numero"
    numero = obterNumeroAleatorio(de, ate);

    // Adiciona o número sorteado dentro do array "sorteados"
    // O método push() insere o valor no final da lista
    sorteados.push(numero);
}

    // Depois que o loop termina, mostra todos os números sorteados em um alerta
    // Como "sorteados" é um array, ele será exibido como uma lista separada por vírgulas
    alert(sorteados);
    }

// Função responsável por gerar um número aleatório entre dois valores (min e max)
 function obterNumeroAleatorio(min, max) {
        // Math.random() gera um número aleatório entre 0 e 1 (ex: 0.1234)
        // Multiplicamos por (max - min + 1) para ajustar o intervalo desejado
        // Math.floor() arredonda o resultado para baixo (remove as casas decimais)
        // Por fim, somamos +min para que o número comece no valor mínimo desejado
        return Math.floor(Math.random() * (max - min + 1)) + min;
}

