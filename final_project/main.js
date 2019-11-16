//室外插入airtable
$(document).ready(function(){
    $("#xgd").hide(function() {
    });

    $("#jl").hide(function() {
    });

    $("#xj").hide(function() {
    });

    $("#香港島").click(function() {
        $("#xj").hide(500);
        $("#jl").hide(500);
        $("#xgd").show(500);
    })

    $("#九龍").click(function() {
        $("#xj").hide(500);
        $("#xgd").hide(500);
        $("#jl").show(500);
    })

    $("#新界").click(function() {
        $("#xgd").hide(500);
        $("#jl").hide(500);
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
        $("#xj1").hide(500);
        $("#jl1").hide(500);
        $("#xgd1").show(500);
    })

    $("#九龍1").click(function() {
        $("#xj1").hide(500);
        $("#xgd1").hide(500);
        $("#jl1").show(500);
    })

    $("#新界1").click(function() {
        $("#xgd1").hide(500);
        $("#jl1").hide(500);
        $("#xj1").show(500);
    })
});