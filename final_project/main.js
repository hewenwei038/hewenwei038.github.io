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

//
$(document).ready(function(){
$(".counter-number").each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 5000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
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


//counter彈出
$(document).ready(function(){
    $("#p1_1").hide(function() {
    });

    $("#p1_2").hide(function() {
    });

    $("#countd1").click(function() {
        $("#p1_2").hide();
        $("#p1_1").toggle(500);
    })

    $("#countd2").click(function() {
        $("#p1_1").hide();
        $("#p1_2").toggle(500);
    })

});

//室外插入airtable
$(document).ready(function(){
    $("#p2_2").hide(function() {
    });

    $("#p2_3").hide(function() {
    });


    $("#btn1_1").click(function() {
        $("#p2_2").hide();
        $("#p2_3").hide();
        $("#p2_1").toggle(500);
    })

    $("#btn1_2").click(function() {
        $("#p2_1").hide();
        $("#p2_3").hide();
        $("#p2_2").toggle(500);
    })

    $("#btn1_3").click(function() {
        $("#p2_1").hide();
        $("#p2_2").hide();
        $("#p2_3").toggle(500);
    })
});




