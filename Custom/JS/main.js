/*scroll on click effect*/
$(function(){
    $(".colorPop li a").on('click', function(){
        $("html, body").animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
});