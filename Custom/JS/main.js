/*scroll on click effect*/
$(function(){
    $(".colorPop li a").on('click', function(){
        $("html, body").animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
});

/*mobile navbar close on click*/
$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});

AOS.init({
disable: window.innerWidth < 768,
easing: 'ease-out-back',
duration: 1000
});

AOS.init({disable: 'mobile'});