// 제이쿼리방식으로 시작할지 
// 라이브러리를 사용하지않고 사용할지를 결정하세요


$(document).ready(function(){




    
        $('.main1 .imgBox3').fadeIn(500, function() {
            $('.main1 .imgBox4').fadeIn(500, function() {
                $('.main1 .imgBox5').fadeIn(500, function() {
                });
            });
        });
   

// 메인화면 

$('section').mousewheel(function(event,delta){
    event.preventDefault()


    // 마우스 올렸을 때
    if(delta>0){

        $("header nav li:nth-child(1) a").removeClass("on");

        $(".box1 .main .imgBox2").removeClass("on")
        $(".box1 .main .imgBox3").removeClass("on")
        $(".box1 .main .imgBox4").removeClass("on")
        $(".box1 .main .imgBox5").removeClass("on")

        $(".box2 .main .imgBox2").addClass("on");
        $(".box2 .main .img5").removeClass("on");


        $(".main1").removeClass("on"),1400;
        $(".main2").removeClass("on"),1400; 

    }



    // 마우스 내렸을 때
    else if(delta<0){

        $("header nav li:nth-child(1) a").addClass("on");

        $(".box1 .main .imgBox2").addClass("on");
        $(".box1 .main .imgBox3").addClass("on");
        $(".box1 .main .imgBox4").addClass("on");
        $(".box1 .main .imgBox5").addClass("on");

        $(".box2 .main .imgBox2").removeClass("on");
        $(".box2 .main .img5").addClass("on");

       
        
        $(".main1").addClass("on"),2000;
        $(".main2").addClass("on"),2000;} 


});


































})