let filmes = JSON.parse(localStorage.getItem("filmes")) || [];

document.addEventListener("DOMContentLoaded", renderizarTabela);

function abrirModal(){
    document.getElementById("modalFil").style.display = "block"
}

function fecharModal(){
    document.getElementById("modalFil").style.display = "none";
    limparCampos();
}

function salvarFilme() {
    const nomedofilme = document.getElementById("Nome do Filme").value.trim();
    const lançamento = document.getElementById("Lançamento").value.trim();
    const produtora = document.getElementById("Produtora").value.trim();
    const genero = document.getElementById("Gênero").value.trim();
    const imagem = document.getElementById("Capa do Filme").value.trim();

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
            genero,
            imagem
        };
        filmes.push(novoFilme);
        atualizarLocalStorage();
        renderizarTabela();
        fecharModal();
        salvarFilme();
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
            <td>${filme.imagem}</td>
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
    document.getElementById("imagem").value = "";
}
