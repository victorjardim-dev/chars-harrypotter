# Projeto API - Personagens de Harry Potter

Projeto feito com 

- HTML
- CSS
- JavaScript

Usando ASYNC, AWAIT e FETCH para puxar a lista de personagens, requisitando de uma API externa no formato de JSON.
Também utilizei módulos para separar melhor os arquivos JavaScript.

## Código incial do FETCH - async/await

```javascript
export default async function fetchCharacters() {
  const characters = fetch("https://hp-api.onrender.com/api/characters");
  const charactersJSON = await (await characters).json();
}
```

## Veja como ficou o projeto
[![Ver Projeto](https://img.shields.io/badge/ver_projeto-75d?style=for-the-badge&logo=sonarsource&logoColor=white)](https://victorjardim.dev/meus-projetos/personagens-harrypotter)