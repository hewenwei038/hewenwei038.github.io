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
        $("#chart").hide();
        $("#xgd").show(500);
    })

    $("#九龍").click(function() {
        $("#xj").hide();
        $("#xgd").hide();
        $("#chart").hide();
        $("#jl").show(500);
    })

    $("#新界").click(function() {
        $("#xgd").hide();
        $("#jl").hide();
        $("#chart").hide();
        $("#xj").show(500);
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
        $("#chart1").hide();
        $("#xgd1").show(500);
    })

    $("#九龍1").click(function() {
        $("#xj1").hide();
        $("#xgd1").hide();
        $("#chart1").hide();
        $("#jl1").show(500);
    })

    $("#新界1").click(function() {
        $("#xgd1").hide();
        $("#jl1").hide();
        $("#chart1").hide();
        $("#xj1").show(500);
    })
});