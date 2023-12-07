// 제이쿼리방식으로 시작할지 
// 라이브러리를 사용하지않고 사용할지를 결정하세요



$(function () {
    // 박스5 titleBox의 li 순번 찾기
    $(".box5-1 .titleBox li").click(function () {
      // 클릭한 나 자신의 순번을 변수로 지정하기
      var i = $(this).index();
      // 콘솔에 확인하기
      console.log(i);
      // 찾아낸 순번을 list_inner안의 div의 순서에 맞게 보이기
      $(".box5-1 .list_inner>div").css({ display: "none" });
      $(".box5-1 .list_inner>div").eq(i).css({ display: "block" });

      $(".titleBox li").removeClass("on");
      // 클릭한 나 자신에게 클래스주기

      $(this).addClass("on");

      $(".timeIn h3 span").css({display: "none"});


    });


// 예약페이지
// 예약하기버튼
    $(".book .btn").click(function(e){
        e.preventDefault()

        $(".alert").css({'display':'block'})

        
    })

// 예약 "확인" 버튼
    $(".alertIn .btn").click(function(e){
        e.preventDefault()

        $(".alert").css({'display':'none'})

        
    })










    // 박스6 titleBox의 li 순번 찾기
    $(".box4-1 .titleBox li").click(function () {
      // 클릭한 나 자신의 순번을 변수로 지정하기
      var j = $(this).index();
      // 콘솔에 확인하기
      console.log(j);
      // 찾아낸 순번을 listBox안의 div의 순서에 맞게 보이기
      $(".box4-1 .listBox>ul").css({ display: "none" });
      $(".box4-1 .listBox>ul").eq(j).css({ display: "block" });

      $(".titleBox li").removeClass("to");
      // 클릭한 나 자신에게 클래스주기

      $(this).addClass("to");


      
    });



    $(document).ready(function(){
let slides = $('#insAfter .slideA');
let currentIndex = 0;

// 첫 번째 슬라이드 표시
$(slides[currentIndex]).fadeIn(4000);

// 슬라이드를 순환하는 함수
function cycleSlides(){
    $(slides[currentIndex]).fadeOut(function(){
        currentIndex = (currentIndex + 1) % slides.length;
        $(slides[currentIndex]).fadeIn(4000);
    });
}

// 3초마다 슬라이드 변경
setInterval(cycleSlides, 4000);
});


// 플러스, 마이너스
    var aa = 0


    $('.minus').click(function(){

    if(aa>0) aa--;
    $('.board').text(aa)




    })


    $('.plus').click(function(){

        if(aa<10) aa++;
        $('.board').text(aa)
        console.log(aa)
        if(aa==10){
            alert('예매는 최대 10명까지 가능합니다.')
        }
    
        $('.cashbar em').text(8*aa)
        $('.alertIn em').text(aa)
    
        })




        $('.cal td').click(function(){
            $('.cal td').removeClass('on')
            $(this).addClass('on')

            var ti = $(this).text()


            $('.bookIn h3 span').css({'display':'inline-block'});


            $('.bookIn b').text(ti)
            $('.alertIn p span').text(ti)

        })



        $('.timebar li').click(function(){
            
            var ci = $(this).text()

            $('.bookIn strong').text(ci)
            $('.alertIn b').text(ci)

        })

        $('.timebar li').click(function(){
            $('.timebar li').removeClass('on')
            $(this).addClass('on')


        })



    
        
        
        // $(document).ready(function(){
        //     var itemWidth = $('.trailer li').outerWidth(true); // 각 항목의 너비 (마진 포함)
        //     var slideInterval;
        
        //     // 슬라이드를 움직이는 함수
        //     / function moveSlide() {
        //     /     $('.trailer ul').animate({'left': -itemWidth}, 1000,'swing' , function() {
        //     /         $('.trailer li').first().appendTo($('.trailer ul')); // 첫 번째 항목을 마지막으로 이동
        //     /         $('.trailer ul').css('left', 0); // 위치 초기화
        //     /     });
        //     / }
        
        //     // 자동 슬라이드 시작
        //     function startSlider() {
        //         slideInterval = setInterval(moveSlide, 3000); // 3초마다 슬라이드 이동
        //     }
        
        //     // 자동 슬라이드 중지
        //     function stopSlider() {
        //         clearInterval(slideInterval);
        //     }
        
        //     // 마우스가 슬라이더 위에 있을 때 자동 슬라이드 중지
        //     $('.trailer').mouseenter(stopSlider).mouseleave(startSlider);
        
        //     startSlider(); // 슬라이더 시작

        //     function moveImages() {
        //         $('.trailer ul').animate({marginLeft: '-=100px'}, 1000, 'linear', function(){
        //             $(this).css('margin-left', '0px').find('div:first').appendTo(this);
        //             moveImages();
        //         });
        //     }

        //     moveImages();
        // });

       
        $(window).scroll(function () {
        
            var sc = $(this).scrollTop();
            


            if (sc > 2000) {
                $(".box6 .map").addClass("on");
              } else {
                $(".box6 .map").removeClass("on");
              }

              if (sc > 2800) {
                $(".box7-1 ul .map1").addClass("on");
              } else {
                $(".box7-1 ul .map1").removeClass("on");
              }
              if (sc > 2900) {
                $(".box7-1 ul .map2").addClass("on");
              } else {
                $(".box7-1 ul .map2").removeClass("on");
              }
            
              if (sc > 3000) {
                $(".box7-1 ul .map3").addClass("on");
              } else {
                $(".box7-1 ul .map3").removeClass("on");
              }
            
            
        });

       

  });



