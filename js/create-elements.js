const imgNotFound = "img/image-not-found.jpg";

export default function createCharacterBox(char) {
  const divBox = document.createElement("article");
  divBox.classList.add("character-box");  
  const picture = document.createElement("picture");
  const image = document.createElement("img");
  image.setAttribute("src", `${char.cImage || imgNotFound}`);
  image.setAttribute("alt", `Foto ${char.cName}`);
  picture.appendChild(image);
  divBox.innerHTML =
  `
    <h2>${char.cName}</h2>
    <ul>
      <li>Casa: <span class='valor-descricao'>${char.cHouse}</span></li>
      <li>Varinha: <span class='valor-descricao'>${char.cWand}</span></li>
      <li>Nascimento: <span class='valor-descricao'>${char.cBirth}</span></li>
    </ul>
  `
  divBox.appendChild(picture);
  return divBox;
}