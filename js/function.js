

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
    function planetInfo(obj){
      const planetList=document.querySelector(".planet-details__list");
       planetList.innerHTML=`
          <li>Rotation Period: ${obj.rotation_period}</li>
          <li>Orbital period: ${obj.orbital_period}</li>
          <li>Diameter: ${obj.diameter}</li>
          <li>Climate: ${obj.climate}</li>
          <li>Gravity: ${obj.gravity}</li>
          <li>Terrain: ${obj.terrain}</li>
          `;
    }

  
    function addCharacterData(obj) {
      const characterList = document.querySelector(".character-details__list");
      characterList.innerHTML = `
          <li>Height: ${obj.height}</li>
          <li>Birth Year: ${obj.birth_year}</li>
          <li>Mass: ${obj.mass}</li>
          <li>Skin Color: ${obj.skin_color}</li>
          <li>Hair Color: ${obj.hair_color}</li>
          <li>Eye Color: ${obj.eye_color}</li>
          <li>Gender: ${obj.gender}</li>
          `;
    }
  
    async function addCharacterInfo(e) {
      const character = await getCharacterInfo(e.target.dataset.url);
      const homeWorld = await getCharacterInfo(character.homeworld);
      addCharacterData(character);
      planetInfo(homeWorld);
    }
    
  
    setCharacters();
  }
  function initEvent(){
    const buttonRight=document.querySelector(".buttonright")
    const buttonleft=document.querySelector(".buttonleft")
     buttonRight.addEventListener("click",function(){
       run()
     })
     buttonLeft.addEventListener("click",function(){
       run()
     })
     
   }

  function next(){
    currentPage++
    setCharacters()
  }
  function previous(){
    if(currentPage > 0)
    currentPage--
    setCharacters()
  }

  function run(){
    initEvent();
    setCharacters();
  }
 
  
  main();
