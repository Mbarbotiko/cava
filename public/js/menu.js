$(document).ready(function () {
    // let headerWidth = document.getElementById("main-header").offsetWidth
    // console.log(headerWidth)


    // let pixelsAcross = document.getElementById('howManyPixelsAcross').offsetWidth;
    // console.log(pixelsAcross); //677 pixels

    // let charactersAcross = document.getElementById('howManyPixelsAcross').innerHTML;

    // let across = charactersAcross.length//45 M's across

    // console.log(across);

// add error handling for ajax call and loading icon  because heroku is slow to load
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