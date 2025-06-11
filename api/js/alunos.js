const API_URL = "http://leoproti.com.br:8004/alunos";

// Função assíncrona responsável por buscar os alunos da API e exibi-los na tabela HTML.
async function carregarAlunos() {
  try {
    const resp = await fetch(API_URL);
    
    if (!resp.ok) {
      throw new Error(`Erro HTTP: ${resp.status}`);
    }

    const alunos = await resp.json();
    const tbody = document.getElementById("paginaAlunos");
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
  } catch (error) {
    console.error("Erro ao carregar alunos:", error);
  }
}

// Adiciona um ouvinte de evento para o envio do formulário de cadastro de aluno.
document.getElementById("adicionarForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const turma = document.getElementById("turma").value.trim();
  const curso = document.getElementById("curso").value.trim();
  const matricula = document.getElementById("matricula").value.trim();

  if (!nome || !turma || !curso || !matricula) {
    alert("Preencha todos os campos corretamente.");
    return;
  }

  const aluno = {  nome, turma, curso, matricula };

  try {
    const resp = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(aluno)
    });

    if (!resp.ok) {
      throw new Error("Erro HTTP: " + resp.status);
    }

    alert("Aluno inserido com sucesso!");
    this.reset();
    carregarAlunos();
  } catch (err) {
    alert("Erro ao salvar aluno na API: " + err.message);
  }
});
document.getElementById("excluirForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const id = document.getElementById("idExcluir").value.trim();

  if (!id) {
    alert("Informe o ID do aluno que deseja excluir.");
    return;
  }

  try {
    const resp = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    });

    if (!resp.ok) {
      throw new Error(`Erro HTTP: ${resp.status}`);
    }

    alert("Aluno excluído com sucesso!");
    carregarAlunos(); // Atualiza a lista após excluir
  } catch (err) {
    alert("Erro ao excluir aluno: " + err.message);
  }
});

document.getElementById("alterarForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const id = document.getElementById("idAlterar").value.trim();
  const nome = document.getElementById("nomeAlterar").value.trim();
  const turma = document.getElementById("turmaAlterar").value.trim();
  const curso = document.getElementById("cursoAlterar").value.trim();
  const matricula = document.getElementById("matriculaAlterar").value.trim();

  if (!id) {
    alert("Informe o ID do aluno que deseja alterar.");
    return;
  }

  // Criando objeto com os campos alterados
  const alunoAtualizado = {};
  if (nome) alunoAtualizado.nome = nome;
  if (turma) alunoAtualizado.turma = turma;
  if (curso) alunoAtualizado.curso = curso;
  if (matricula) alunoAtualizado.matricula = matricula;

  try {
    const resp = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(alunoAtualizado)
    });

    if (!resp.ok) {
      throw new Error(`Erro HTTP: ${resp.status}`);
    }

    alert("Aluno atualizado com sucesso!");
    carregarAlunos(); // Atualiza a lista após a alteração
  } catch (err) {
    alert("Erro ao atualizar aluno: " + err.message);
  }
});

// Evento para carregar alunos ao clicar no botão
document.getElementById("exibirDados").addEventListener("click", carregarAlunos);

// Garante que os alunos sejam carregados ao iniciar a página
document.addEventListener("DOMContentLoaded", carregarAlunos);
