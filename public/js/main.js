$(document).ready(function () {
  
  checkSize()
window.addEventListener('resize', checkSize);
function checkSize(){
  console.log(checkSize);
}

const mediaQuery = window.matchMedia('(max-width: 768px)');
if (mediaQuery.matches) {

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }

  $(window).scroll(function () {
    var scroll_pos = 0;
    var number = 0
    var dish = '.dish'
    var div = ' div'
    scroll_pos = $(this).scrollTop();
    for (var i = 1; i < 9; i++) {
      number++
      const element = document.querySelector(dish + number);
      const elementOffset = offset(element)
      if (scroll_pos > elementOffset.top - 50) {
        $(dish + number + div).css('opacity', '.7');
      }
      else {
        $(dish + number + div).css('opacity', '.0');
      }
    }
  });

}

  //Create a constructor for reviews

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

  // Media screen query for mobile users, loops through eight elements increments each time changing the div css and capturing scroll position in the window which triggers the css
//add this event listener later for window changes
// mq.addListener(function(changed) {
//     if(changed.matches) {
//         the width of browser is more then 700px
//     } else {
//         the width of browser is less then 700px
//     }
// });




});


