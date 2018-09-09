$(document).ready(function () {



  //Onclick nav "Location" & "Reviews" using JQuery animate method to set hash in html to scroll to the set window location in 2 seconds.
  $(".loc").on('click', function () {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = $('.location');
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 2000, function () {
        window.location.hash = hash;
      });
    }
  });


  $(".rev").on('click', function () {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = $('#show-reviews');
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 2000, function () {
        window.location.hash = hash;
      });
    }
  });

  //create a constructor for reviews

  function Review(header, comment) {
    this.header = header;
    this.comment = comment
  };

  const firstReview = new Review('<h1>"Woooow!...."</h1>', '<p>"This is the second time in this restaurant and I am really impressed by the quality of food, professionalism and the level of service"</p>')

  const secondReview = new Review('<h1>"Really Really Really Great Food!...."</h1>', '<p>"First class food, first class service and a great ambiance. The quality and flavours were of the dishes were exquisite and everything was presented beautifully. Well done Quote. Im a tough customer to impress"</p>')

  const thirdReview = new Review('<h1>"Lovely atmosphere, stylish but not snobbish...."</h1>', '<p>"We had a lovely meal at this place. The food was terrific, the location was central and the service was excellent.  We went for the recommendations and were not disappointed."</p>')


//show reviews runs a constant loop with setTimeout function
  showReviews();

  function showReviews() {
    $('#show-reviews').html(firstReview.header + firstReview.comment).fadeIn(2000).fadeOut(6000);
    setTimeout(showReviews2, 8000);

  }

  function showReviews2() {
    $('#show-reviews').html(secondReview.header + secondReview.comment).fadeIn(2000).fadeOut(6000);
    setTimeout(showReviews3, 8000);

  }
  function showReviews3() {
    $('#show-reviews').html(thirdReview.header + thirdReview.comment).fadeIn(2000).fadeOut(6000);
    setTimeout(showReviews, 8000);

  }

// Media screen query for mobile users, still working on this first find the DIV location in the window, then store that variable and pass it into another function that changes the CSS when that DIV is passed on scroll
  const mediaQuery = window.matchMedia('(max-width: 768px)');
  if (mediaQuery.matches) {

    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }


    const div = document.querySelector('.dish1');
    const divOffset = offset(div);
    console.log(divOffset.top);

    const div2 = document.querySelector('.dish2');
    const divOffset2 = offset(div2);
    console.log(divOffset2.top);

    const div3 = document.querySelector('.dish3');
    const divOffset3 = offset(div3);
    console.log(divOffset3.top);

    const div4 = document.querySelector('.dish4');
    const divOffset4 = offset(div4);
    console.log(divOffset4.top);

    const div5 = document.querySelector('.dish5');
    const divOffset5 = offset(div5);
    console.log(divOffset5.top);

    const div6 = document.querySelector('.dish6');
    const divOffset6 = offset(div6);
    console.log(divOffset6.top);

    const div7 = document.querySelector('.dish7');
    const divOffset7 = offset(div7);
    console.log(divOffset7.top);

    const div8 = document.querySelector('.dish8');
    const divOffset8 = offset(div8);
    console.log(divOffset8.top);
    

    var scroll_pos = 0;
    $(window).scroll(function () {
      scroll_pos = $(this).scrollTop();
      console.log(scroll_pos);
      if (scroll_pos > divOffset.top -50) {
        $(".dish1 div").css('opacity','.7');
      }
      else {

        $(".dish1 div").css('opacity','.0');
       
      }
      if (scroll_pos > divOffset2.top -50) {
        $(".dish2 div").css('opacity','.7');
      }
      else {

        $(".dish2 div").css('opacity','.0');
       
      }
      if (scroll_pos > divOffset3.top -50) {
        $(".dish3 div").css('opacity','.7');
      }
      else {

        $(".dish3 div").css('opacity','.0');
      
      }
      if (scroll_pos > divOffset4.top -50) {
        $(".dish4 div").css('opacity','.7');
      }
      else {

        $(".dish4 div").css('opacity','.0');
      
      }

      if (scroll_pos > divOffset5.top -50) {
        $(".dish5 div").css('opacity','.7');
      }
      else {

        $(".dish5 div").css('opacity','.0');
      
      }

      if (scroll_pos > divOffset6.top -50) {
        $(".dish6 div").css('opacity','.7');
      }
      else {

        $(".dish6 div").css('opacity','.0');
      
      }

      if (scroll_pos > divOffset7.top -50) {
        $(".dish7 div").css('opacity','.7');
      }
      else {

        $(".dish7 div").css('opacity','.0');
      
      }

      if (scroll_pos > divOffset8.top -50) {
        $(".dish8 div").css('opacity','.7');
      }
      else {

        $(".dish8 div").css('opacity','.0');
      
      }

    });
  }

  
});


//for later to consolidate code work this out:
// const mediaQuery = window.matchMedia('(max-width: 768px)');
// if (mediaQuery.matches) {

//   function offset(el) {
//     const rect = el.getBoundingClientRect(),
//       scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//       scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
//   }

//   const dishSelectorArr = ['.dish1', '.dish2', '.dish3']

//   var i;
//   for (i = 0; i < dishSelectorArr.length; i++) {
//     var div = document.querySelector(dishSelectorArr[i]);
//     var divOffset = offset(div);
//     console.log(divOffset);
//     var scroll_pos = 0;
//     $(window).scroll(function () {
//       scroll_pos = $(this).scrollTop();
//       if (scroll_pos > divOffset.top - 50) {
//         console.log(divOffset.top);
//         $('dish1 div').css('opacity', '.7');
//       }
//       else {

//         $('dish1 div').css('opacity', '.0');

//       }



//     });
//   }
// }
