// Declara uma função chamada "sortear"
// Essa função será executada quando for chamada (por exemplo, ao clicar em um botão)
function sortear() {

    // Pega o valor digitado no campo de input com id "quantidade" e guarda na variável "quantidade"
    // O .value serve para acessar o valor que o usuário escreveu no campo
    let quantidade = document.getElementById('quantidade').value;

    // Pega o valor do campo de input com id "de" (número inicial do sorteio)
    let de = document.getElementById('de').value;

    // Pega o valor do campo de input com id "ate" (número final do sorteio)
    let ate = document.getElementById('ate').value;

    // Mostra na tela (em uma janelinha de alerta) o valor da variável "quantidade"
    alert(`Quantidade: ${quantidade}`);

    // Mostra o valor da variável "de" (número inicial)
    alert(`Do número: ${de}`);

    // Mostra o valor da variável "ate" (número final)
    alert(`Até o número: ${ate}`);
}
