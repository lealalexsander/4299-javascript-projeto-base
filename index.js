const inputItem = document.getElementById("input-item");

const botaoAdicionar = document.getElementById("adicionar-item");

botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault(); //não deixa atualizar a tela (previne um evento padrão como recarregar a página)
    if (inputItem.value === "") {
        alert("Prencha o Campo!");
        return;
    }

    const itemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-contrainer");
})