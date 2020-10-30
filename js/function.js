
var starWarsPeopleList = document.querySelector("nav-list six-quarter");

fetch('https://swapi.dev/api/people/') 
.then(function(response) {

	 console.log(response)
})


