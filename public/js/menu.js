$(document).ready(function () {


    let loading = '<div class="loader"><img src="./public/images/loader.gif"></div>'

    $(loading).css({ "color": "purple" })

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

    // function addToString() {
    //     let stringEl = document.getElementById('ptest').innerText;
    //     console.log(stringEl);
    //     $('#ptest').append('<span class = "dots">  .</span>')
    //     let findMe = $('.dots').position()
    //     console.log(findMe)
    //     let outerPoint = Math.round(findMe.left)
    //     console.log(outerPoint)
    //     // $('.dots').remove()

    //     for (var i = 0; i < 25; i++) {
    //         $('.dots').remove()
    //         $('#ptest').append('  .' + '<span class = "dots">  .</span>')
    //         findMe = $('.dots').position()
    //         console.log(findMe)
    //         outerPoint = Math.round(findMe.left)
    //         console.log(outerPoint)
    //         if (outerPoint>600){
    //             $('.dots').remove()
    //             break;
    //         }

    //     }

    // }


    function addToString() {
        let table = document.getElementsByTagName('table')
        for(var i = 0; i<table.length; i++){
            let p = table[i].getElementsByTagName('p')[0]
            console.log(p)
        }

        // let stringEl = document.getElementsByTagName('p')
        // for (var i = 0 ; i<stringEl.length; i++) {
        //     console.log(stringEl[i])

        // }
        // $('#ptest').append('<span class = "dots">  .</span>')
        // let findMe = $('.dots').position()
        // console.log(findMe)
        // let outerPoint = Math.round(findMe.left)
        // console.log(outerPoint)
        // // $('.dots').remove()

        // for (var i = 0; i < 25; i++) {
        //     $('.dots').remove()
        //     $('#ptest').append('  .' + '<span class = "dots">  .</span>')
        //     findMe = $('.dots').position()
        //     console.log(findMe)
        //     outerPoint = Math.round(findMe.left)
        //     console.log(outerPoint)
        //     if (outerPoint>600){
        //         $('.dots').remove()
        //         break;
        //     }

        // }

    }

   

    //create a loop that appends text select the last character of the string and append it using a span tag then use the ID of the span tag to check its position in the window.

    //if it has not reached the outer most edge of the table coordinate remove the span tag and continue the loop

    //if it has end the function

    //https://stackoverflow.com/questions/5143534/how-to-get-the-position-of-text-within-an-element



});