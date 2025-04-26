const botoesFiltro = document.querySelectorAll(".menu-lateral button");
const produtos = document.querySelectorAll(".produto");

botoesFiltro.forEach(botao => {
    botao.addEventListener("click", () => {
        // Remove classe 'active' dos outros botões
        botoesFiltro.forEach(b => b.classList.remove("active"));
        botao.classList.add("active");

        // Agora pegando do data-atributo
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

