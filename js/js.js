


$(document).ready(function(){




  const ani1 = gsap.timeline();
    ani1.to("#home_top p", {x : "50%", duration: 1.2 }, 'move')
        .to("#home_bottom p", {x : "-50%", duration: 1.2 }, 'move')
        .to("#home_top p", {y : "150%", duration: 0.8 }, 'move2')
        .to("#home_bottom p", {y : "-150%", duration: 0.8 }, 'move2')
        .to("#home_line", {scaleX: 1, duration: 0.8}, 'move2')

        .to("#home_line", {rotate: -180, scaleX: 1.3, duration: 0.4}, '+=0.1')

        .to("#home_line", {scaleX: 0, duration: 0.8}, 'move3')
        .from("#home_top span", {y : "150%", duration: 0.9 }, 'move2')
        .from("#home_bottom span", {y : "-150%", duration: 0.9 }, 'move3')

        .to("#home_top span", { y : 4, x : -4, textShadow: "6px -6px 2px #e1d7fd", duration: 0.5 }, "shadow")
        .to("#home_bottom span", { y : 4, x : -4, textShadow: "6px -6px 2px #e1d7fd", duration: 0.5 }, "-=0.4");



        setTimeout(function() {
          $(".img1").css("opacity", "1");
        }, 2700); // 3초 후에 투명도 변경
            
        setTimeout(function() {
          $(".img2").css("opacity", "1");
        }, 2900); // 3초 후에 투명도 변경






  $(window).scroll(function () {
        
    var sc = $(this).scrollTop();
    $('.scroll').text(sc)






    if (sc < 1600 ) {
      // 클래스 추가
      $('header .pNav').css({"display":'none'})
    } else {
      // 클래스 제거
      $('header .pNav').css({"display":'block'})
    }


    if (sc >= 0 && sc < 1000 ) {
        $('header .gnb ul li').eq(0).addClass('on');
    } else {
      $('header .gnb ul li').eq(0).removeClass('on');

    }
    if (sc >= 1000 && sc < 1980 ) {
      $('header .gnb ul li').eq(1).addClass('on');
  } else {
    $('header .gnb ul li').eq(1).removeClass('on');

  }

  if (sc >= 1980  ) {
    $('header .gnb ul li').eq(2).addClass('on');
} else {
  $('header .gnb ul li').eq(2).removeClass('on');

}




    if (sc >= 1800 && sc < 3000) {
      // 클래스 추가
      $('header .pNav ul li').eq(0).addClass('on');
      $('header .pNav ul li').eq(1).removeClass('on');
      $('header .pNav ul li').eq(2).removeClass('on');
    } else {
      // 클래스 제거
      $('header .pNav ul li').eq(0).removeClass('on');
    }
  
    // 두 번째 범위 (3000~4000)
    if (sc >= 3000 && sc < 4000) {
      $('header .pNav ul li').eq(1).addClass('on');
      $('header .pNav ul li').eq(0).removeClass('on');
      $('header .pNav ul li').eq(2).removeClass('on');
    } else {
      $('header .pNav ul li').eq(1).removeClass('on');
    }
  
    // 세 번째 범위 (4000~5000)
    if (sc >= 4000 && sc < 5100) {
      $('header .pNav ul li').eq(2).addClass('on');
      $('header .pNav ul li').eq(0).removeClass('on');
      $('header .pNav ul li').eq(1).removeClass('on');
    } else {
      $('header .pNav ul li').eq(2).removeClass('on');
    }


});



$('.active1').click(function(){
  var ht = $(window).height()
  var i = $(this).index();
  console.log(i)


  $('html ,body').stop().animate({'scrollTop':0},1000 )


});
    

$('.active2').click(function(){
  var ht = $(window).height()
  var i = $(this).index();
  console.log(i)


  $('html ,body').stop().animate({'scrollTop':1000}, 1000  )
  

});

$('.active3').click(function(){
  var ht = $(window).height()
  var i = $(this).index();
  console.log(i)


  $('html ,body').stop().animate({'scrollTop':1980},1000, )
  

});



$('header .pNav ul li').click(function(){

  var p = $(this).index()
  console.log(p)

  
   var scrollPositions = [2000, 3000, 4100];
   if (p < scrollPositions.length) {
     $('html, body').animate({
       scrollTop: scrollPositions[p]
     }, 1000); // 1초 동안 스크롤 이동
   }


})
















$(window).scroll(function() {
  var sc = $(this).scrollTop();
  var targetValue = 80; // 목표 value
  var currentValue = $('.progress1').val(); // 현재 value
  var increment = 1; // 한 번에 증가할 값
  var speed = 30; // 각 증가 사이의 시간 간격(밀리초)

  if (sc >= 500) {
    var interval = setInterval(function() {
      if (currentValue < targetValue) {
        currentValue += increment;
        $('.progress1').val(currentValue);
      } else {
        clearInterval(interval); // 목표값에 도달하면 인터벌 중지
      }
    }, speed);
  } else {
    $('.progress1').val(0);
  }
});

$(window).scroll(function() {
  var sc = $(this).scrollTop();
  var targetValue = 90; // 목표 value
  var currentValue = $('.progress2').val(); // 현재 value
  var increment = 1; // 한 번에 증가할 값
  var speed = 30; // 각 증가 사이의 시간 간격(밀리초)

  if (sc >= 510) {
    var interval = setInterval(function() {
      if (currentValue < targetValue) {
        currentValue += increment;
        $('.progress2').val(currentValue);
      } else {
        clearInterval(interval); // 목표값에 도달하면 인터벌 중지
      }
    }, speed);
  } else {
    $('.progress2').val(0);
  }
});

$(window).scroll(function() {
  var sc = $(this).scrollTop();
  var targetValue = 80; // 목표 value
  var currentValue = $('.progress3').val(); // 현재 value
  var increment = 1; // 한 번에 증가할 값
  var speed = 30; // 각 증가 사이의 시간 간격(밀리초)

  if (sc >= 520) {
    var interval = setInterval(function() {
      if (currentValue < targetValue) {
        currentValue += increment;
        $('.progress3').val(currentValue);
      } else {
        clearInterval(interval); // 목표값에 도달하면 인터벌 중지
      }
    }, speed);
  } else {
    $('.progress3').val(0);
  }
});

$(window).scroll(function() {
  var sc = $(this).scrollTop();
  var targetValue = 60; // 목표 value
  var currentValue = $('.progress4').val(); // 현재 value
  var increment = 1; // 한 번에 증가할 값
  var speed = 30; // 각 증가 사이의 시간 간격(밀리초)

  if (sc >= 530) {
    var interval = setInterval(function() {
      if (currentValue < targetValue) {
        currentValue += increment;
        $('.progress4').val(currentValue);
      } else {
        clearInterval(interval); 
      }
    }, speed);
  } else {
    $('.progress4').val(0);
  }
});



$(window).scroll(function() {
  
    $('#proJect1 .popUp01').css('display', 'none');
    $('#proJect2 .popUp02').css('display', 'none');
    $('#proJect3 .popUp03').css('display', 'none');
    
  })

$('.btn001').click(function(){
  

  $('#proJect1 .popUp01').css({'display':'block'})

})

$('#proJect1 .popUp01 span').click(function(){

  $('#proJect1 .popUp01').css({'display':'none'})
})


$('#proJect1 .popUp01 p').click(function(){

  $('#proJect1 .popUp01').css({'display':'none'})
})

$('#proJect1 .popUp01').click(function(){

  $('#proJect1 .popUp01').css({'display':'none'})
})



$('.btn002').click(function(){
  

  $('#proJect2 .popUp02').css({'display':'block'})

})

$('#proJect2 .popUp02 span').click(function(){

  $('#proJect2 .popUp02').css({'display':'none'})
})


$('#proJect2 .popUp02 p').click(function(){

  $('#proJect2 .popUp02').css({'display':'none'})
})

$('#proJect2 .popUp02').click(function(){

  $('#proJect2 .popUp02').css({'display':'none'})
})

$('.btn003').click(function(){
  

  $('#proJect3 .popUp03').css({'display':'block'})

})

$('#proJect3 .popUp03 span').click(function(){

  $('#proJect3 .popUp03').css({'display':'none'})
})


$('#proJect3 .popUp03 p').click(function(){

  $('#proJect3 .popUp03').css({'display':'none'})
})

$('#proJect3 .popUp03').click(function(){

  $('#proJect3 .popUp03').css({'display':'none'})
})







});











