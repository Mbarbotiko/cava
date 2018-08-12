$(document).ready(function () {
  
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

});
