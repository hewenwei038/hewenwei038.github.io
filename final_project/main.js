window.onscroll = function() {scrollFunction()};


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

//室外插入airtable
$(document).ready(function(){
    $("#xgd").hide(function() {
    });

    $("#jl").hide(function() {
    });

    $("#xj").hide(function() {
    });

    $("#香港島").click(function() {
        $("#xj").hide();
        $("#jl").hide();
        $("#xgd").toggle(500);
    })

    $("#九龍").click(function() {
        $("#xj").hide();
        $("#xgd").hide();
        $("#jl").toggle(500);
    })

    $("#新界").click(function() {
        $("#xgd").hide();
        $("#jl").hide();
        $("#xj").toggle(500);
    })
});

//室內插入airtable
$(document).ready(function(){
    $("#xgd1").hide(function() {
    });

    $("#jl1").hide(function() {
    });

    $("#xj1").hide(function() {
    });

    $("#香港島1").click(function() {
        $("#xj1").hide();
        $("#jl1").hide();
        $("#xgd1").toggle(500);
    })

    $("#九龍1").click(function() {
        $("#xj1").hide();
        $("#xgd1").hide();
        $("#jl1").toggle(500);
    })

    $("#新界1").click(function() {
        $("#xgd1").hide();
        $("#jl1").hide();
        $("#xj1").toggle(500);
    })
});