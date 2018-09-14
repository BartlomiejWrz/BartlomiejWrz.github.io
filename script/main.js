
// scrollowanie strony do wyznaczonych punktów
$(document).ready(function(){
    $(".scroll").on("click", function(event){
        if(this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top-61
            }, 1000, function(){
                window.location.hash = hash;
                window.scrollTo(0, $(hash).offset().top - 61);
        });
    }
    });
}
);
