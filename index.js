const inputItem = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");
let contador = 0;

botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault(); //não deixa atualizar a tela (previne um evento padrão como recarregar a página)
    if (inputItem.value === "") {
        alert("Prencha o Campo!");
        return
    }

    const itemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + contador++;
    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;

    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);

    itemDaLista.appendChild(containerItemDaLista);
    listaDeCompras.appendChild(itemDaLista);

    const diaDaSemana = new Date().toLocaleDateString("pt-BR", {weekday: "long"});
    const data = new Date().toLocaleDateString("pt-Br");
    const hora = new Date().toLocaleTimeString("pt-Br", {hour: "numeric", minute: "numeric"});

    const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`;
    console.log(dataCompleta);
})