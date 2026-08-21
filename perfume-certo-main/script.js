const produtos = document.querySelectorAll(".produto");
const ordenacao = document.getElementById("ordenacao");

if (ordenacao) {
  ordenacao.addEventListener("change", () => {
    const lista = document.getElementById("produtos");
    const itens = [...lista.querySelectorAll(".produto")];

    if (ordenacao.value === "Menor preço") {
      itens.sort((a, b) => Number(a.dataset.preco) - Number(b.dataset.preco));
    }

    if (ordenacao.value === "Maior preço") {
      itens.sort((a, b) => Number(b.dataset.preco) - Number(a.dataset.preco));
    }

    if (ordenacao.value === "Mais Vendidos") {
      itens.sort((a, b) => Number(a.dataset.preco) - Number(b.dataset.preco));
      itens.reverse();
    }

    itens.forEach((item) => lista.appendChild(item));
  });
}

document.querySelectorAll(".favorito").forEach((botao) => {
  botao.addEventListener("click", () => {
    botao.classList.toggle("ativo");
    botao.textContent = botao.classList.contains("ativo") ? "♥" : "♡";
  });
});


document.querySelectorAll(".menu-link[data-filter]").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const categoria = link.dataset.filter;

    document.querySelectorAll(".menu-link").forEach((l) => {
      l.classList.remove("ativo");
    });

    link.classList.add("ativo");

    produtos.forEach((produto) => {
      const categoryProduto = produto.dataset.category;
      produto.style.display = categoryProduto === categoria ? "" : "none";
    });
  });
});


document.querySelector(".menu-link:first-child").addEventListener("click", (e) => {
  e.preventDefault();


  document.querySelectorAll(".menu-link").forEach((l) => {
    l.classList.remove("ativo");
  });

  produtos.forEach((produto) => {
    produto.style.display = "";
  });
});

document.querySelector(".menu-link:last-of-type").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".contatos").scrollIntoView({ behavior: "smooth" });
});
document.addEventListener("DOMContentLoaded", () => {
  const botoesFiltro = document.querySelectorAll("[data-filter]");
  const produtos = document.querySelectorAll(".produto");

  botoesFiltro.forEach((botao) => {
    botao.addEventListener("click", (evento) => {
      evento.preventDefault(); 

      const categoriaSelecionada = botao.getAttribute("data-filter");

      produtos.forEach((produto) => {
        const categoriaProduto = produto.getAttribute("data-category");

        if (
          categoriaSelecionada === "todos" ||
          categoriaProduto === categoriaSelecionada
        ) {
          produto.style.display = "block";
        } else {
          produto.style.display = "none";
        }
      });
    });
  });
});



