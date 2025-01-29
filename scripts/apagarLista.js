export default function apagarLista(listaDeCompras) {
    const itensDaLista = listaDeCompras.querySelectorAll("li");

    if (itensDaLista.length === 0) {
        alert("A lista já está vazia!");
        return; 
    }

    
    listaDeCompras.innerHTML = ""; 
}
