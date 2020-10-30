// let starWarsPeopleList = document.querySelector('nav-list six-quarter');

// fetch("https://swapi.dev/api/people/") 
// .then(function(response) {
//   return response.json(); 
// })
// .then(function(json) {
//   let people = json.results; 

//   for(p of people) {
//     let listItem = document.querySelector('nav-item'); 
//     listItem.innerHTML = '<p>' + p.name + '</p>'; 
//     starWarsPeopleList.appendChild(listItem);
//   }

// })

async function listCharacters(){
	const response = await fetch("https://swapi.dev/api/people/")
	const data = await response.json()
	return data.results
}

function renderListItems(character)
let listItem = document.querySelectors(".box1")
listItem.innerHtml = 
document.querySelector(".mass").innerHTML = user.mass

async function renderCharacterList(){
	const characters = await listCharacters()

	for(let character of characters){
		renderListItem(character)
	}
}