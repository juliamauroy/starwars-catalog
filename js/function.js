

async function main() {
    // const navList = document.querySelector('.nav-list');
    let starWarsPeopleList = document.querySelector(".nav-list.six-quarter");
    let currentPage = 1;
  
    async function getPageData() {
      const response = await fetch(
        `https://swapi.dev/api/people/?page=${currentPage}`
      );
      return await response.json();
    }
    async function getCharacterInfo(url) {
      const response = await fetch(url);
      return await response.json();
    }
  
    async function setCharacters() {
      const characters = await getPageData();
      for (character of characters.results) {
        const li = document.createElement("li");
        li.textContent = character.name;
        li.dataset.url = character.url;
        li.addEventListener("click", addCharacterInfo);
        starWarsPeopleList.append(li);
      }
    }
  
    function addCharacterData(obj) {
      const characterList = document.querySelector(".character-details__list");
      characterList.innerHTML = `
          <li>Name: ${obj.name}</li>
          <li>Height: ${obj.height}</li>
          <li>Mass: ${obj.mass}</li>
          <li>Skin Color: ${obj.skin_color}</li>
          `;
    }
  
    async function addCharacterInfo(e) {
      const character = await getCharacterInfo(e.target.dataset.url);
      const homeWorld = await getCharacterInfo(character.homeworld);
      addCharacterData(character);
    }
  
    setCharacters();
  }
  
  main();
