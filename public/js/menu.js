$(document).ready(function () {

    let headerWidth = document.getElementById("main-header").offsetWidth
    console.log(headerWidth)
    //can do this. css to kee the menu centered on screen change add event listener and logic divide width  by screen width @ time multiply by 100 
    //124 px/ 1366 px= .9 * 100 = 90, 90/2 = 45 (center of screen)
    


    $.ajax({
        url: 'https://cava-manager.herokuapp.com/api/dishes',
        method: "GET"
    }).then(function (response) {
        console.log(response);
        let appCount = 0
        let entreeCount = 0
        let drinksCount = 0
        let tableType = null;
        response.map(function (cavaRes) {
            if (cavaRes.type === "Appetizer") {
                tableType = '.appetizer-table'
                appCount++
                console.log(appCount)

                if (appCount % 2 === 0) {
                    $(tableType).append('<th>' + cavaRes.title + '<p>' + cavaRes.description + '</p>' + '</th>')
                    $(tableType).append('</tr>')
                } else {
                    $(tableType).append('<tr>')
                    $(tableType).append('<th>' + cavaRes.title + '<p>' + cavaRes.description + '</p>' + '</th>')
                }
            }
            else if (cavaRes.type === "Entree") {
                tableType = '.entree-table'
                entreeCount++
                console.log(appCount)

                if (entreeCount % 2 === 0) {
                    $(tableType).append('<th>' + cavaRes.title + '<p>' + cavaRes.description + '</p>' + '</th>')
                    $(tableType).append('</tr>')
                } else {
                    $(tableType).append('<tr>')
                    $(tableType).append('<th>' + cavaRes.title + '<p>' + cavaRes.description + '</p>' + '</th>')
                }
            }

            else if (cavaRes.type === "Drinks") {
                tableType = '.drinks-table'
                drinksCount++
                console.log(appCount)

                
                if (drinksCount % 2 === 0) {
                    $(tableType).append('<th>' + cavaRes.title + '<p>' + cavaRes.description + '</p>' + '</th>')
                    $(tableType).append('</tr>')
                } else {
                    $(tableType).append('<tr>')
                    $(tableType).append('<th>' + cavaRes.title + '<p>' + cavaRes.description + '</p>' + '</th>')
                }



            } else {
                console.log('No Menu Available contact Admin')
            }
        })
    });
    //use map
    //if type.response ==="Appetizer" print to .appetizer-table
    //"Entree"  /entree-table
    //"Drinks"/drinks-table
    //create <th>response.title</th>
    //<td>reponse.description</td>


});