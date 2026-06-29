# Portfólio Online — Erick Dahl

Portfólio pessoal (Currículo Online) desenvolvido para a atividade prática de
**Fundamentos da Programação Web**.

Construído com **HTML5**, **CSS3** e **JavaScript** puros — sem frameworks ou bibliotecas
(sem Bootstrap, Tailwind, React, jQuery etc.).

## Estrutura do projeto

```text
.
├── index.html        # Página "Sobre mim" (apresentação + hobbies)
├── formacao.html     # Formação acadêmica, cursos e idiomas
├── portfolio.html    # Projetos realizados com links
├── contato.html      # Formulário com validação em JavaScript
├── css/
│   └── estilo.css    # Folha de estilo única (tema claro/escuro, responsivo)
└── js/
    └── script.js     # Menu mobile, troca de tema e validação do formulário
```

As 4 páginas são interligadas por um **menu fixo** presente no topo de todas elas.

## Funcionalidades

- Navegação por menu visível em todas as páginas (modelo de páginas separadas).
- **Menu responsivo** (hambúrguer) em telas pequenas.
- **Tema claro/escuro** alternável, com a preferência salva no navegador (`localStorage`).
- **Formulário de contato** com validação em JavaScript (nome, e-mail e mensagem) e
  **simulação de envio** com modal de confirmação.
- Layout **responsivo** (funciona em computador, tablet e smartphone).
- Código comentado em pontos relevantes.

## Como executar localmente

Basta abrir o arquivo `index.html` no navegador. Não há dependências para instalar.
