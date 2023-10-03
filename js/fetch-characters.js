import createCharacterBox from "./create-elements.js";

export default async function fetchCharacters() {
  const characters = fetch("https://hp-api.onrender.com/api/characters");
  const charactersJSON = await (await characters).json();

  const totalChars = charactersJSON.length;
  const totalRetornadosAtualmente = 27;

  const tituloPrincipal = document.querySelector(".titulo");
  tituloPrincipal.querySelector(".quantidade").innerHTML = `${totalChars}<br>
  Mostrando um total de ${totalRetornadosAtualmente}`;

  // totalChars - 1
  for(let i = totalRetornadosAtualmente - 1; i >= 0; i--) {
    const strDateReplace = charactersJSON[i].dateOfBirth;

    const character = {
      cName: charactersJSON[i].name, // Nome
      cBirth: strDateReplace || "Dado não disponível", // Data de Nascimento
      cHouse: charactersJSON[i].house || "Dado não disponível", // Casa
      cWand: charactersJSON[i].wand.core || "Dado não disponível", // Varinha
      cImage: charactersJSON[i].image, // Foto
    }
    tituloPrincipal.insertAdjacentElement("afterend", createCharacterBox(character));
  }
}