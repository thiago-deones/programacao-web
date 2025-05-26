const API_URL = "http://leoproti.com.br:8004/alunos-view";

async function carregarProdutos() {

  const resp = await fetch(API_URL);

  const produtos = await resp.json();
  const tbody = document.getElementById("produtosBody");
  tbody.innerHTML = "";
  produtos.forEach((produto) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${produto.id}</td>
      <td>${produto.nome}</td>
      <td>${produto.preco != null ? produto.preco.toFixed(2) : ""}</td>
    `;
    tbody.appendChild(tr);
  });
}

document
  .getElementById("produtoForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value.trim();
    const precoStr = document.getElementById("preco").value;
    const preco = precoStr === "" ? null : parseFloat(precoStr);

    if (!nome || preco === null || isNaN(preco)) {
      alert("Preencha com um nome e um nota com valor válido.");
      return;
    }

    try {
      const resp = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, preco }),
      });

      // Se a resposta não for bem-sucedida (status HTTP diferente de 2xx), lança um erro.
      if (!resp.ok) {
        throw new Error("Erro HTTP: " + resp.status);
      }

      alert("Pontuação inserido com sucesso!");
      this.reset();
      carregarProdutos();
    } catch (err) {
      alert(
        "Erro ao salvar a pontuação na API: "
        + err.message
      );
    }
  });

// Ao carregar o script, chama a função para exibir os produtos já cadastrados.
// Isso garante que a tabela esteja sempre atualizada ao abrir a página.
carregarProdutos();