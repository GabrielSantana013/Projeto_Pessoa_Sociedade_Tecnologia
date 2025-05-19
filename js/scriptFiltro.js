const botoesFiltro = document.querySelectorAll(".menu-lateral button");
const produtos = document.querySelectorAll(".produto");

// Clique nos botões de filtro
botoesFiltro.forEach(botao => {
    botao.addEventListener("click", () => {
        botoesFiltro.forEach(b => b.classList.remove("active"));
        botao.classList.add("active");

        const categoria = botao.getAttribute("data-categoria");
        
        produtos.forEach(produto => {
            if (categoria === "geral") {
                produto.style.display = "block";
            } else {
                if (produto.classList.contains(categoria)) {
                    produto.style.display = "block";
                } else {
                    produto.style.display = "none";
                }
            }
        });
    });
});

document.getElementById("input-pesquisa").addEventListener("input", function () {
    const termo = removerAcentos(this.value.toLowerCase());

    document.querySelectorAll(".produto").forEach(produto => {
        const nome = removerAcentos(produto.textContent.toLowerCase());
        produto.classList.toggle("hidden", !nome.includes(termo));
    });
});

function removerAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}


// Clique nos produtos
produtos.forEach(produto => {
    produto.addEventListener('click', () => {
        const nome = produto.querySelector('p').innerText;
        const imagem = produto.querySelector('img').getAttribute('src');
        const preco = produto.querySelectorAll('p')[1].innerText;
        window.location.href = `encomenda.html?nome=${encodeURIComponent(nome)}&imagem=${encodeURIComponent(imagem)}&preco=${encodeURIComponent(preco)}`;
    });
});
