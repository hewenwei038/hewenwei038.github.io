window.onscroll = function() {scrollFunction()};

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Device ready...');
    
}


$(document).ready(function() {
    // Transition effect for navbar 
    $(window).scroll(function() {
      // checks if window is scrolled more than 500px, adds/removes solid class
      if($(this).scrollTop() > 500) { 
          $('.navbar').addClass('solid');
          $('#head').css("padding", "0.2em");
      } else {
          $('.navbar').removeClass('solid');
      }
    });
});

$(document).ready(function(){
    $(".navbar-nav li a").click(function (event) {
        // check if window is small enough so dropdown is created
        var toggle = $(".navbar-toggle").is(":visible");
        if (toggle) {
          $("#navbar.navbar-collapse.collapse.in").collapse('hide');
        }
      });
    });





 