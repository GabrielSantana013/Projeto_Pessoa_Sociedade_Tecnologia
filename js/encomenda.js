function getParametrosURL() {
    const params = new URLSearchParams(window.location.search);
    return {
        nome: params.get('nome') || "Nome do Produto",
        preco: parseFloat(params.get('preco')?.replace('R$', '').replace(',', '.')) || 0.00,
        imagem: params.get('imagem') || "img/produto_padrao.png"
    };
}

function preencherPagina() {
    const dados = getParametrosURL();

    const nomeEl = document.getElementById("nomeProduto");
    const precoEl = document.getElementById("precoProduto");
    const imagemEl = document.getElementById("imagemProduto");
    const quantidadeEl = document.getElementById("quantidade");
    const totalEl = document.getElementById("totalFinal");

    nomeEl.textContent = dados.nome;
    precoEl.textContent = `R$${dados.preco.toFixed(2)}`;
    imagemEl.src = dados.imagem;

    function atualizarTotal() {
        const quantidade = parseInt(quantidadeEl.value) || 1;
        const total = quantidade * dados.preco;
        totalEl.textContent = `R$${total.toFixed(2)}`;
    }

    // Atualiza sempre que a quantidade muda
    quantidadeEl.addEventListener("input", atualizarTotal);
    atualizarTotal(); // Chamada inicial

    const botaoPedido = document.getElementById("botaoPedido");
    botaoPedido.addEventListener("click", function () {
        const rua = document.getElementById("rua").value;
        const cidade = document.getElementById("cidade").value;
        const cep = document.getElementById("cep").value;

        if (!rua || !cidade || !cep) {
            alert("Por favor, preencha todos os campos de entrega.");
            return;
        }

        alert(`Pedido realizado com sucesso!\n\nProduto: ${dados.nome}\nTotal: ${totalEl.textContent}\n\nEntrega em: ${rua}, ${cidade} - CEP ${cep}`);
        window.location.href = "index.html"; // Ou redirecione para outra página
    });
}

window.onload = preencherPagina;
