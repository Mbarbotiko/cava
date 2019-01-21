

let dotPoint = 0;


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
    function dots(x, y, a, b) {
        while (a < b) {
            let dotSpan = '<span id = "dots">  .</span>'
            $(x).append(dotSpan)
            let getDot = document.getElementById('dots');
            let findMe = getDot.getBoundingClientRect();
            let fromLeft = findMe.left;
            dotPoint = Math.round(fromLeft)
            if (dotPoint > y) {
                console.log('both together' + dotPoint, y)
                $('#dots').remove();
                break;
            } else {
                $(x).append('  .')
                $('#dots').remove();
            }
        }
    }
    //function loops through the table element finds all the p tags then runs dot function within the loop y passing its variables as arguments to the dots loop that only runs while we are cycling through the table elements(p tags in this case)
    function addToString() {
        let table = document.getElementsByTagName('table')
        for (var i = 0; i < table.length; i++) {
            let point = table[i].getBoundingClientRect();
            console.log(point)
            let rightPoint = point.right;
            console.log(rightPoint)
            let roundedRightPoint = Math.round(rightPoint)
            console.log(roundedRightPoint)
            let offSetNum = roundedRightPoint - 100;
            let p = table[i].getElementsByTagName('p')[0]
            console.log(p)
            a = i;
            console.log(a)
            b = table.length
            console.log(b)
            dots(p, offSetNum, a, b);
        }
    }

});

