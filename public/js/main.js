$(document).ready(function () {
  //need to write an onclick function that shows description of dish so mobile users can view them 


//Onclick nav "Location" & "Reviews" using JQuery animate method to set hash in html to scroll to the set window location in 2 seconds.
  $(".loc").on('click',function(){
    if (this.hash !== "") {
      event.preventDefault();
      var hash = $('.location');
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 2000, function(){
        window.location.hash = hash;
      });
    }
   });

   
  $(".rev").on('click',function(){
    if (this.hash !== "") {
      event.preventDefault();
      var hash = $('.reviews');
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 2000, function(){
        window.location.hash = hash;
      });
    }
   }); 

//create a constructor for reviews

function Review(header, comment){
  this.header=header;
  this.comment=comment
};

const firstReview= new Review ("Woooow!","This is the second time in this restaurant and I am really impressed by the quality of food, professionalism and the level of service")

const secondReview= new Review ("Really Really Really Great Food!","First class food, first class service and a great ambiance. This was my favorite restaurant in Copenhagen. Food is served in small mini portions giving you chance to sample, should you wish, two types of starter and two of the main course and even two deserts should you be hungry. The quality and flavours were of the dishes were exquisite and everything was presented beautifully. Well done Quote. Im a tough customer to impress")

const thirdReview= new Review ("Lovely atmosphere, stylish but not snobbish","We had a lovely meal at this place. The food was terrific, the location was central and the service was excellent. I don't like snobbish places so this was the perfect combo of nice atmosphere and good food. We went for the recommendations and were not disappointed.")

// $('.location').html(firstReview.header+firstReview.comment);













});
