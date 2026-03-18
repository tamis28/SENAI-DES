let filmes = JSON.parse(localStorage.getItem("filmes")) || [];

document.addEventListener("DOMContentLoaded", renderizarTabela);

function abrirModal(){
    document.getElementById("modal").style.display = "block"
}

function fecharModal(){
    document.getElementById("modal").style.display = "none";
    limparCampos();
}

function salvarCliente() {
    const nomedofilme = document.getElementById("Nome do Filme").value.trim();
    const lançamento = document.getElementById("Lançamento").value.trim();
    const produtora = document.getElementById("Produtora").value.trim();
    const genero = document.getElementById("Gênero").value;

    if(!nomedofilme || !genero) {
        alert("Nome do Filme e o Gênero são obrigatórios!");
        return;
    }

    const existe = filmes.find(filme =>filme.nomedofilme === nomedofilme);

    if (existe) {
        alert("Nome do Filme já cadastrado!");
        return;
    }

        const novoFilme = {
            id: Date.now(),
            nomedofilme,
            lançamento,
            produtora,
            genero
        };
        filmes.push(novoFilme);
        atualizarLocalStorage();
        renderizarTabela();
        fecharModal();
}

function renderizarTabela() {
    const tabela = document.getElementById("dados");
    tabela.innerHTML = "";

    filmes.forEach(filme => {
        tabela.innerHTML += `
        <tr>
            <td>${filme.nomedofilme}</td>
            <td>${filme.lançamento}</td>
            <td>${filme.produtora}</td>
            <td>${filme.genero}</td>
            <td><button onclick="excluirFilme(${filme.id})">Excluir</button></td>
            </tr>`
    });
}

function excluirFilme(id) {
    if(!confirm("Deseja realmente excluir?"))
        return;

    filmes = filmes.filter(filme => filme.id !== id)
    atualizarLocalStorage();
    renderizarTabela();
}

function atualizarLocalStorage(){
    localStorage.setItem("filmes",JSON.stringify(filmes));
}
function limparCampos(){
    document.getElementById("nomedofilme").value = "";
    document.getElementById("lançamento").value = "";
    document.getElementById("produtora").value = "";
    document.getElementById("genero").value = "";
}
