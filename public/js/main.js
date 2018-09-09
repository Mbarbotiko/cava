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
      var hash = $('.reviews');
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

    var scroll_pos = 0;
    $(window).scroll(function () {
      scroll_pos = $(this).scrollTop();
      if (scroll_pos > divOffset.top -50) {
        // $(".test").removeClass('hidden');
        $(".dish1 div").css('opacity','.7');
      }
      else {

        $(".dish1 div").css('opacity','.0');
       
      }

    });


  }


});

