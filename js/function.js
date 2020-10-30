 let starWarsPeopleList = document.querySelector('.nav-list.six-quarter');

fetch("https://swapi.dev/api/people/") 
.then(function(response) {
  return response.json(); 
})
.then(function(json) {
  let people = json.results; 

  for(p of people) {
    let listItem = document.createElement('li'); 
    listItem.innerHTML = '<li>' + p.name + '</li>'; 
    starWarsPeopleList.appendChild(listItem);
  }

})