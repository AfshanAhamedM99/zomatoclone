$(document).ready(function(){
    $("#Cuisines-text1").click(function(){
        $("#slidedown-content1").slideToggle(1000);
    })
})
$(document).ready(function(){
    $("#Cuisines-text2").click(function(){
        $("#slidedown-content2").slideToggle(1000);
    })
})
$(document).ready(function(){
    $("#Cuisines-text3").click(function(){
        $("#slidedown-content3").slideToggle(1000);
    })
})
$(document).ready(function(){
    $("#Cuisines-text4").click(function(){
        $("#slidedown-content4").slideToggle(1000);
    })
})

$(function () {
    $.scrollUp({
        scrollDistance: 100, // in px.
        scrollImg: true
    });
});