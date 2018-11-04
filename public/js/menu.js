$(document).ready(function () {

let headerWidth = document.getElementById("main-header").offsetWidth
console.log(headerWidth)
//can do this. css to kee the menu centered on screen change add event listener and logic divide width  by screen width @ time multiply by 100 
//124 px/ 1366 px= .9 * 100 = 90, 90/2 = 45 (center of screen)


$.ajax({
  url: 'https://cava-manager.herokuapp.com/api/dishes',
  method: "GET"
}).then(function(response) {
  console.log(response);
});
//use map
//if type.response ==="Appetizer" print to .appetizer-table
//"Entree"  /entree-table
//"Drinks"/drinks-table
//create <th>response.title</th>
//<td>reponse.description</td>

});