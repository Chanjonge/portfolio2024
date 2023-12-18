
$(function(){

$('section').mousewheel(function(event,delta){
    event.preventDefault()


    // 마우스 올렸을 때
    if(delta>0){
        var prev = $(this).prev().offset().top //지금 나의 이전 요소의 위치값을 찾아라.

        $('html ,body').stop().animate({'scrollTop': prev},1400,'easeOutBounce')
        $("header nav li:nth-child(2) a").removeClass("on");
    }





    // 마우스 내렸을 때
    else if(delta<0){
        var next = $(this).next().offset().top
        $('html ,body').stop().animate({'scrollTop':next},1400,'easeOutBounce')

        $("header nav li:nth-child(2) a").addClass("on");
    }


});


})