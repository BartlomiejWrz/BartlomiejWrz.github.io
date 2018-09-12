//button scrolle main section
let scroller = document.getElementById("arrow");

scroller.addEventListener("click", function(){
    console.log("scrolled");
});


function scroll_to(selector) {
    $('html,body').animate({scrollTop: $(selector).offset().top}, 1000);
    return false;
} 
<a href="javascript:void();" onclick="scroll_to('#docelowy_id');">link</a>