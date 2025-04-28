// Função pra pegar os parâmetros da URL
function getParametrosURL() {
    const params = new URLSearchParams(window.location.search);
    return {
        nome: params.get('nome') || "Nome do Produto",
        preco: params.get('preco') || "00,00",
        imagem: params.get('imagem') || "img/produto_padrao.png"
    };
}

// Função principal que preenche a página
function preencherPagina() {
    const dados = getParametrosURL();

    document.getElementById("nomeProduto").textContent = dados.nome;
    document.getElementById("precoProduto").textContent = `R$${dados.preco}`;
    document.getElementById("imagemProduto").src = dados.imagem;

    // Evento de clique no botão "Fazer Pedido"
    const botaoPedido = document.getElementById("botaoPedido");
    botaoPedido.addEventListener("click", function() {
        alert("Pedido realizado com sucesso!");
        window.location.href = "index.html"; // Aqui coloca o caminho da sua página home
    });
}

// Executa assim que a página carregar
window.onload = preencherPagina;
