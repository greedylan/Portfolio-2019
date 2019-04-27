var Person = require('./modules/Module');

var $ = require('jquery');


$(function() {

  // Hover Effect on UX Projects
  $('.project-overlay').mouseenter(function(){
    $(this).addClass('project-overlay--show');
  });

  $('.project-overlay').mouseleave(function(){
    $(this).removeClass('project-overlay--show');
  });


  // Hover Effect on Frontend Projects
  $('.coding-project__item').mouseenter(function(){
    $(this).find('img').addClass('hidden');
  });

  $('.coding-project__item').mouseleave(function(){
    $(this).find('img').removeClass('hidden');
  });

  // Project Pagination Smooth Scrolling
  $('.pagination a').on('click', function(event){

    if(this.hash !== ""){
      // event.preventDefault();
      var hash = this.hash,
      x = $(hash).offset().top,
      y = $(window).height() / 4,
      z = x - y;

      $('html, body').animate({
        scrollTop: z
      }, 800, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });

      console.log(hash);


      setTimeout(function(){
        $(hash).find('em').addClass('is--flashing');
        setTimeout(function(){
          $(hash).find('em').removeClass('is--flashing');
        }, 600);

      }, 600);
    }

  });

});
