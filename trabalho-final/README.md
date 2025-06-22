# Cadastro de Alunos - App Mobile com Expo

Este projeto é um aplicativo mobile para cadastro, edição, listagem e exclusão de alunos. Foi desenvolvido utilizando **React Native**, **Expo** e **Expo Router**, consumindo uma API REST externa para persistência dos dados.

---

## Tecnologias utilizadas

- React Native
- Expo
- Expo Router (para navegação)
- React Native Paper (componentes UI)
- Axios (requisições HTTP)
- API REST externa: [http://leoproti.com.br:8004/alunos](http://leoproti.com.br:8004/alunos)

---

## Funcionalidades

- Listar alunos cadastrados
- Cadastrar novos alunos
- Editar dados de alunos existentes
- Excluir alunos
- Navegação entre telas com Expo Router

---

## Estrutura do Projeto

- `app/`
  - `alunos/`
    - `index.jsx` — Tela de listagem de alunos
    - `novo.jsx` — Tela de cadastro de aluno
    - `[id].jsx` — Tela de edição de aluno
  - `_layout.jsx` — Layout padrão com navegação (Expo Router)

---

## Como executar o projeto

### Pré-requisitos

- Node.js instalado
- Expo CLI instalado globalmente (`npm install -g expo-cli`)
- Um emulador Android/iOS ou dispositivo físico com o app Expo Go

