$(document).ready(function() {
    $('.carousel').carousel({
        interval: 10000
    })
});


$(document).ready(function() {
    $( "#linkdin" ).mouseover(function(){
        $(this).attr("src", "./images/contact/linkedin-logo.png");
    });