import { criarItemDaLista } from "./scripts/criarItemDaLista.js";
import verificarListaVazia from "./scripts/verificarListaVazia.js";
import apagarLista from "./scripts/apagarLista.js";

const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");


botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault(); //não deixa atualizar a tela (previne um evento padrão como recarregar a página)
    const itemDaLista = criarItemDaLista();
    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia(listaDeCompras);
});

verificarListaVazia(listaDeCompras);

document.getElementById("apagar-lista").addEventListener("click", function() {
    const listaDeCompras = document.getElementById("lista-de-compras");
    apagarLista(listaDeCompras);
  });
  