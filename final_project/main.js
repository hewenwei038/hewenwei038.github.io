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

    $(document).ready(function() {
    $("#checkbtn").click(function() {
        $('html, body').animate({
            scrollTop: $("#introduction").offset().top
        }, 500);
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




//室外插入airtable
$(document).ready(function(){
    $("#age2_5").hide(function() {
    });

    $("#age5_12").hide(function() {
    });

    $("#共融樂園").hide(function() {
    });

    $("#特色主題").hide(function() {
    });

    $("#outdoor1").click(function() {
        $("#age5_12").hide();
        $("#共融樂園").hide();
        $("#特色主題").hide();
        $("#age2_5").toggle(500);
    })

    $("#outdoor2").click(function() {
        $("#age2_5").hide();
        $("#共融樂園").hide();
        $("#特色主題").hide();
        $("#age5_12").toggle(500);
    })

    $("#outdoor3").click(function() {
        $("#age2_5").hide();
        $("#age5_12").hide();
        $("#特色主題").hide();
        $("#共融樂園").toggle(500);
    })

    $("#outdoor4").click(function() {
        $("#age2_5").hide();
        $("#age5_12").hide();
        $("#共融樂園").hide();
        $("#特色主題").toggle(500);
    })
});

//室內插入airtable
$(document).ready(function(){
    $("#bsize").hide(function() {
    });

    $("#lpopulation").hide(function() {
    });

    $("#longtime").hide(function() {
    });

    $("#特色主題2").hide(function() {
    });

    $("#indoor1").click(function() {
        $("#特色主題2").hide();
        $("#lpopulation").hide();
        $("#longtime").hide();
        $("#bsize").toggle(500);
    })

    $("#indoor2").click(function() {
        $("#bsize").hide();
        $("#longtime").hide();
        $("#特色主題2").hide();
        $("#lpopulation").toggle(500);
    })

    $("#indoor3").click(function() {
        $("#bsize").hide();
        $("#lpopulation").hide();
        $("#特色主題2").hide();
        $("#longtime").toggle(500);
    })

    $("#indoor4").click(function() {
        $("#bsize").hide();
        $("#lpopulation").hide();
        $("#longtime").hide();
        $("#特色主題2").toggle(500);
    })
});

//特色亮点插入airtable
$(document).ready(function(){
    $("#千秋").hide(function() {
    });

    $("#蹺蹺板").hide(function() {
    });

    $("#完善設施").hide(function() {
    });

    $("#寵物同樂").hide(function() {
    });

    $("#theme1").click(function() {
        $("#蹺蹺板").hide();
        $("#完善設施").hide();
        $("#寵物同樂").hide();
        $("#千秋").toggle(500);
    })

    $("#theme2").click(function() {
        $("#千秋").hide();
        $("#完善設施").hide();
        $("#寵物同樂").hide();
        $("#蹺蹺板").toggle(500);
    })

    $("#theme3").click(function() {
        $("#千秋").hide();
        $("#蹺蹺板").hide();
        $("#寵物同樂").hide();
        $("#完善設施").toggle(500);
    })

    $("#theme4").click(function() {
        $("#千秋").hide();
        $("#蹺蹺板").hide();
        $("#完善設施").hide();
        $("#寵物同樂").toggle(500);
    })
});