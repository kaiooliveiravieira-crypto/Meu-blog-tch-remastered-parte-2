// Seleciona todos os botões de reação do blog
const botoes = document.querySelectorAll(".reaction-btn");

botoes.forEach(botao => {
    botao.addEventListener("click", botaoClicado);
});

function botaoClicado(event) {
    // Localiza a tag <span> interna que contém o número do contador
    let contador = event.currentTarget.querySelector("span");
    
    // Incrementa a contagem atual
    let valorAtual = parseInt(contador.textContent);
    contador.textContent = valorAtual + 1;

    // Efeito visual de animação ao clicar no botão
    event.currentTarget.style.transform = "scale(1.15)";
    setTimeout(() => {
        event.currentTarget.style.transform = "none";
    }, 150);
}