const formulario = document.querySelector("[data-fomulario]");

function criarVideo(evento) {
    const titulo = document.querySelector("[data-titulo]");
    const imagem = document.querySelector("[data-imagem]");
    const url = document.querySelector("[data-url]");
    const descricao = Math.floor(Math.random() * 10).toString();

}

formulario.addEventListener("submit", evento => criarVideo(evento))