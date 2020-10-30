let starWarsPeopleList = document.querySelector('nav-list six-quarter');

fetch("https://swapi.dev/api/people/") 
.then(function(response) {
  return response.json(); 
})
.then(function(json) {
  let people = json.results; 

  for(p of people) {
    let listItem = document.querySelector('nav-item'); 
    listItem.innerHTML = '<p>' + p.name + '</p>'; 
    starWarsPeopleList.appendChild(listItem);
  }

})