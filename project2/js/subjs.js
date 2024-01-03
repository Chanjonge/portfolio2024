


$(document).ready(function(){


  
    $('.box1 .txtBox .btn1').click(function(){

      var ni = $('.box1 .txtBox .numBox .num').text()
      console.log(ni)
      $('header .numb').text(ni)
      $('.shop').css({'display':'block'})
    })

    $('header .util .fa-magnifying-glass').click(function(){

      $('header input').toggleClass('on')

    })



$(window).scroll(function () {
    var sc = $(this).scrollTop();
    // $(".box3>h2").text(sc);
    // console.log(sc)

  

if (sc >= 1200) {
      $(".box3-1 .imgBox").addClass("on");
} else {
      $(".box3-1 .imgBox").removeClass("on");
  }


     if (sc >= 1200) {
        $(".box3-1 .txtBox").addClass("on");
      } else {
        $(".box3-1 .txtBox").removeClass("on");
      }

      if (sc >= 1900) {
        $(".box3-2 .imgBox").addClass("on");

      }else {
        $(".box3-2 .imgBox").removeClass("on");

     }

     if (sc >= 2900) {
      $(".box3-3 .imgBox").addClass("on");

    }else {
      $(".box3-3 .imgBox").removeClass("on");
    }

     if (sc >= 2700) {
      $('.note .note1').addClass('on')

     }else {
       $(".note .note1").removeClass("on");

     }
     if (sc >= 3000) {
       $('.note .note2').addClass('on')

     }else {
       $(".note .note2").removeClass("on");

     }
     if (sc >= 3100) {
       $('.note .note3').addClass('on')

     }else {
       $(".note .note3").removeClass("on");

     }


     if (sc >= 4000) {
       $('.box3-4 .imgBox').addClass('on')

     }else {
       $(".box3-4 .imgBox").removeClass("on");

     }

     if (sc >= 4000) {
      $('.box3-4 .txtBox').addClass('on')

    }else {
      $(".box3-4 .txtBox").removeClass("on");

    }

    if (sc >= 5400 ) {

      $('header .util p').addClass('on')
    }else {

      $('header .util p').removeClass('on')
    }



  });
     


  $('.trailer ul').draggable({
    containment: 'parent',
    snap: false,
    grid: false,
    drag: function(event, ui) {
      // 드래그한 거리를 가져와서 움직입니다.
      var dragDistance = ui.position.right;
      
      // 드래그한 거리를 해당 요소의 left 속성에 적용합니다.
      
      $(this).css({'left' : 50});
      
    }
  });


      // li를 클릭할 때마다 p의 이미지가 바뀌어라.
      $(".trailer li").click(function () {
        var i = $(this).index();
        console.log(i);
        $(".main>ul li").fadeOut();
        $(".main>ul li").eq(i).fadeIn();

        
      });
    

      $('.box1 .imgBox .main span').click(function(){
        let t = $('.box1 .txtBox h2').text()
let p = $(this).parents('li').find('em').html()
let p2 = p + t +'<p><p class="plus">+</p><span class="text">00</span><p class="minus">-</p></p>'
let p3 = '<li>' + p2 + '</li>'

        console.log(p)
        $(".shop section").find("div ul").append(p3);


      })



      let i = 0;
      $('.box1 .txtBox .btn1').click(function (e) {
          e.preventDefault();
          $(".shop").css({ display: "block" });
          i++;
          console.log(i);

    
        
        });


      //   reset을 클릭했을 떄 shop이 사라져라

      $('.reset').click(function(){


          $('.shop').css({'display':'none'})

      });




      // .plus 버튼 클릭 이벤트 처리
$(document).on('click', '.plus', function() {
  var $text = $(this).closest('li').find('.text');
  var count = parseInt($text.text(), 10);
  if (count < 10) {
      count++;
      $text.text(count);
  } else {
      alert("최대 10개까지 구매가능합니다!"); // 10 이상일 때 경고창 표시
  }
});

// .minus 버튼 클릭 이벤트 처리
$(document).on('click', '.minus', function() {
  var $text = $(this).closest('li').find('.text');
  var count = parseInt($text.text(), 10);
  count = count > 0 ? count - 1 : 0;
  $text.text(count);
});




  
})