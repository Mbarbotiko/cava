$(document).ready(function () {


// add error handling for ajax call and loading icon  because heroku is slow to load

//get the position of the table
//get the position of the last . in the newly created string from lop
//loop until that position matches the position of the right edge of the table
//create variable that will change with each map loop through the object ++ so a unique ID is created for the element
//use that to count the string added to the description and check its last . coordinate/ position


let testTable = document.getElementById('test');
console.log(testTable)
let leftPoint = testTable.getBoundingClientRect();
console.log(leftPoint);//use the width of element- width of string element
let stringEl = document.getElementById('ptest').innerHTML
console.log(stringEl);
let stringLength = stringEl.length//51 characters long.
let stringIndex = stringLength-1;
let lastLetter = stringEl[stringIndex]
console.log(lastLetter)//returns the last letter in the string

//find the x position of the last Letter vs the x position of the edge of the table

// let width = window.innerWidth;
// console.log(width);

let tryThis = lastLetter.getBoundingClientRect();
console.log(tryThis);


    $.ajax({
        url: 'https://cava-manager.herokuapp.com/api/dishes',
        method: "GET"
    }).then(function (response) {
     
        let tableType = null;
        response.map(function (cavaRes) {
            if (cavaRes.type === "Appetizer") {
                tableType = '.menu-appetizers'
                $(tableType).append('<table><tr><th>'+cavaRes.title+'<p>'+cavaRes.description+'</p></th></tr></table')
                
            }
            else if (cavaRes.type === "Entree") {
                tableType = '.menu-entree'
                $(tableType).append('<table><tr><th>'+cavaRes.title+'<p>'+cavaRes.description+'</p></th></tr></table')
      
               
            }

            else if (cavaRes.type === "Drinks") {
                tableType = '.menu-drinks'
                $(tableType).append('<table><tr><th>'+cavaRes.title+'<p>'+cavaRes.description+'</p></th></tr></table')
             



            } else {
                console.log('No Menu Available contact Admin')
            }
        })
   });
    // use map
    // if type.response ==="Appetizer" print to .appetizer-table
    // "Entree"  /entree-table
    // "Drinks"/drinks-table
    // create <th>response.title</th>
    // <td>reponse.description</td>


});