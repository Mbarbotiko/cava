

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

    // let testTable = document.getElementById('test');
    // console.log(testTable)
    // let leftPoint = testTable.getBoundingClientRect();
    // console.log(leftPoint);

    //prints dots to the p tags within the table element, will want to replace 100 with a length or do a while loop instead
    //outer point will need to be replaced at aswell, last p tag dots run past because using from LEFT instead of from right elements write from left to right every other P tag should cross check against left point, even p tag should check against right point


    function dots(x, y) {
        for (var i = 0; i < 100; i++) {
            //runs loop 100 times
            let dotSpan = '<span id = "dots">  .</span>'
            $(x).append('  .' + dotSpan)
            //appends a normal dot and a span dot for tracking
            let getDot = document.getElementById('dots');
            let findMe = getDot.getBoundingClientRect();
            // console.log(findMe)
            //finds location of dot
            let fromLeft = findMe.left;
            //location from left of dot
            dotPoint = Math.round(fromLeft)
            // console.log(dotPoint)
            //rounds the number
            console.log('where I am' + dotPoint)
            console.log('where i should stop:' + y)

            if (dotPoint > y) {
                console.log('both together' + dotPoint, y)
                $('#dots').remove();
                break;
            } else {

                $('#dots').remove();

            }

        }//y vs dot point if dotpoint gets to be larger than y break the loop

    }



    //function loops through the table element finds all the p tags then runs dot function within the loop.
    function addToString() {
        let table = document.getElementsByTagName('table')
        for (var i = 0; i < table.length; i++) {
            let point = table[i].getBoundingClientRect();
            let rightPoint = point.right;
            let roundedRightPoint = Math.round(rightPoint)
            console.log(roundedRightPoint)
            let offSetNum = roundedRightPoint - 100;
            let p = table[i].getElementsByTagName('p')[0]
            console.log(p)
            dots(p, offSetNum);
        }
    }

});


 // function dots(x, y) {
    //     while (dotPoint < y) {
    //         if (dotPoint > y) {
    //             $('#dots').remove()
    //             break;

    //         } else {
    //             let dotSpan = '<span id = "dots">  .</span>'
    //             $(x).append('  .' + dotSpan)
    //             let getDot = document.getElementById('dots');
    //             let findMe = getDot.getBoundingClientRect();
    //             console.log(findMe)
    //             let fromLeft = findMe.left;
    //             dotPoint = Math.round(fromLeft)

    //         }

    //     }



    // }
