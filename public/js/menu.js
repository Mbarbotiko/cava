$(document).ready(function () {


    // add error handling for ajax call and loading icon  because heroku is slow to load

    //get the position of the table
    //get the position of the last . in the newly created string from lop
    //loop until that position matches the position of the right edge of the table
    //create variable that will change with each map loop through the object ++ so a unique ID is created for the element
    //use that to count the string added to the description and check its last . coordinate/ position


    // let testTable = document.getElementById('test');
    // console.log(testTable)
    // let leftPoint = testTable.getBoundingClientRect();
    // console.log(leftPoint);//use the width of element- width of string element
    // let stringEl = document.getElementById('ptest').innerHTML
    // console.log(stringEl);
    // let stringLength = stringEl.length//51 characters long.
    // let stringIndex = stringLength-1;
    // let lastLetter = stringEl[stringIndex]
    // console.log(lastLetter)//returns the last letter in the string

    //find the x position of the last Letter vs the x position of the edge of the table

    // let width = window.innerWidth;
    // console.log(width);

    // let tryThis = lastLetter.getBoundingClientRect();
    // console.log(tryThis);

    // let testTable = document.getElementById('test');
    // console.log(testTable);
    // let stringEl = document.getElementById('ptest').innerText;
    // console.log(stringEl);
    // let stringIndex = stringEl.length-1
    // console.log(stringIndex)
    // let lastCharacter = stringEl[stringIndex]
    // console.log(lastCharacter)


    let testTable = document.getElementById('test');
    console.log(testTable);
    let stringEl = document.getElementById('ptest').innerText;
    console.log(stringEl);
    let lastCharacter = stringEl.lastIndexOf('.')
    console.log(lastCharacter)
    let whatIsIt = stringEl[lastCharacter];
    console.log(whatIsIt)
    let findMe = '<span id="dots">'+whatIsIt+'</span>'
    console.log(findMe)
    //have to append HTML to this character next so that the coordinates can be found via an element selector
    let whereIsIt = $(findMe).position();
    console.log(whereIsIt);
    console.log(stringEl)



    //https://stackoverflow.com/questions/5143534/how-to-get-the-position-of-text-within-an-element

    let loading = '<div class="loader"><img src="./public/images/loader.gif"></div>'

    $(loading).css({"color":"purple"})

    $('.menu-header').prepend(loading);
    let loadingDiv = '.loader'


    $.ajax({
        url: 'https://cava-manager.herokuapp.com/api/dishes',
        method: "GET"

    }).then(function (response) {
        $(loadingDiv).hide();

        let tableType = null;
        response.map(function (cavaRes) {
            if (cavaRes.type === "Appetizer") {
                tableType = '.menu-appetizers'
                $(tableType).append('<table><tr><th>' + cavaRes.title + '<p>' + cavaRes.description + '</p></th></tr></table')
            }
            else if (cavaRes.type === "Entree") {
                tableType = '.menu-entree'
                $(tableType).append('<table><tr><th>' + cavaRes.title + '<p>' + cavaRes.description + '</p></th></tr></table')
            }

            else if (cavaRes.type === "Drinks") {
                tableType = '.menu-drinks'
                $(tableType).append('<table><tr><th>' + cavaRes.title + '<p>' + cavaRes.description + '</p></th></tr></table')
            } else {

                alert('No Menu Available contact Admin')
            }
        })
    });
});