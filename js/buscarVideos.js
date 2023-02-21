import { conectaApi } from "./conectaApi.js";

async function buscarVideos(evento) {
    evento.preventDefault();

    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const buscar = await conectaApi.buscaVideo(dadosDePesquisa);

    console.log(buscar)
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDePesquisa.addEventListener("click", evento => buscarVideos(evento));