


$(document).ready(function(){


  $(window).scroll(function () {
        
    var sc = $(this).scrollTop();
    $('.scroll').text(sc)

   
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



setTimeout(function() {
  $(".img1").css("opacity", "1");
}, 2700); // 3초 후에 투명도 변경
    
setTimeout(function() {
  $(".img2").css("opacity", "1");
}, 2900); // 3초 후에 투명도 변경


// $(window).scroll(function(){
//   var sc = $(this).scrollTop();

//   if (sc >= 553) {
//     $('#progress').val(80), ;
//   } else {
//     $('#progress').val(0);
//   }





// })

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
        clearInterval(interval); // 목표값에 도달하면 인터벌 중지
      }
    }, speed);
  } else {
    $('.progress4').val(0);
  }
});



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











