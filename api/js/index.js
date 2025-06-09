const API_URL = "http://leoproti.com.br:8004/alunos";

async function carregarAlunos() {
  try{
  const resp = await fetch(API_URL);

  if (!resp.ok) {
    throw new Error("Erro ao buscar os alunos: " + resp.status);
  }

  const alunos = await resp.json();
  const tbody = document.getElementById("produtosBody");
  tbody.innerHTML = "";
  alunos.forEach((aluno) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${aluno.id}</td>
      <td>${aluno.nome}</td>
      <td>${aluno.turma}</td>
      <td>${aluno.curso}</td>
      <td>${aluno.matricula}</td>
      `;
    tbody.appendChild(tr);
  });
} catch (err) {
  alert("Erro ao carregar os alunos: " + err.message);
  }
}

document
  .getElementById("adicionarForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value.trim();
    
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
      carregarAlunos();
    } catch (err) {
      alert(
        "Erro ao salvar a pontuação na API: "
        + err.message
      );
    }
  });

// Ao carregar o script, chama a função para exibir os produtos já cadastrados.
// Isso garante que a tabela esteja sempre atualizada ao abrir a página.
carregarAlunos();