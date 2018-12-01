$(document).ready(function () {
    let loading = '<div class="loader"><img src="./public/images/loader.gif"></div>'
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

        addToString();
    });
    // add error handling for ajax call and loading icon  because heroku is slow to load

    // let testTable = document.getElementById('test');
    // console.log(testTable)
    // let leftPoint = testTable.getBoundingClientRect();
    // console.log(leftPoint);

    //prints dots to the p tags within the table element, will want to replace 100 with a length or do a while loop instead
    //outer point will need to be replaced at aswell, last p tag dots run past because using from LEFT instead of from right elements write from left to right every other P tag should cross check against left point, even p tag should check against right point
    function dots(x) {
        for (var i = 0; i <100; i++) {
            $(x).append('  .' + '<span class = "dots">  .</span>')
            findMe = $('.dots').position()
            outerPoint = Math.round(findMe.left)
            console.log(outerPoint)
            $('.dots').remove()
            if (outerPoint > 675) {
                $('.dots').remove()
                break;
            }

        }

    }

    //function loops through the table element finds all the p tags then runs dot function within the loop.
    function addToString() {
        let table = document.getElementsByTagName('table')
        for (var i = 0; i < table.length; i++) {
            let p = table[i].getElementsByTagName('p')[0]
            console.log(p)
            dots(p);
        }
    }

});