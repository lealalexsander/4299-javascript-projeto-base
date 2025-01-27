const inputItem = document.getElementById("input-item");
let contador = 0;

export function criarItemDaLista () {

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

    inputCheckbox.addEventListener("click", function (){
        if (inputCheckbox.checked) {
            nomeItem.style.textDecoration = "line-through";
            nomeItem.style.color = "red";
        } else {
            nomeItem.style.textDecoration = "none";
            nomeItem.style.color = "black";
        }

    });

    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);

    itemDaLista.appendChild(containerItemDaLista);
    

    const itemData = document.createElement("p");
    itemData.classList.add("texto-data");
    itemDaLista.appendChild(itemData);

    const diaDaSemana = new Date().toLocaleDateString("pt-BR", {weekday: "long"});
    const data = new Date().toLocaleDateString("pt-Br");
    const hora = new Date().toLocaleTimeString("pt-Br", {hour: "numeric", minute: "numeric"});

    const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`;
    itemData.innerText = dataCompleta;

    return itemDaLista;
}