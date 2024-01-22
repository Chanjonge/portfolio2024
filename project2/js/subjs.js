


$(document).ready(function(){


    var a = 0
    $('.fa-minus').click(function(){
     if(a>0)a--;
     $('.num').text(a)
     


    })
    $('.fa-plus').click(function(){
        if(a<10)a++;
        $('.num').text(a)
        
   
    if(a==10){

        alert('최대 10개까지 구매 가능합니다')
    }
   
       })


      
      

       



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
      
      $(this).css({'left' : 20});
      
    }
  });


      // li를 클릭할 때마다 p의 이미지가 바뀌어라.
      $(".trailer li").click(function () {
        var i = $(this).index();
        console.log(i);
        $(".main>ul li").css({"display":"none"});
        $(".main>ul li").eq(i).css({"display":"block"});

        
      });
    

      $('.box1 .imgBox .main span').click(function(){
        let t = $('.box1 .txtBox h2').text()
let p = $(this).parents('li').find('em').html()
let p2 = p + t +'<p><p class="plus">+</p><span class="text">00</span><p class="minus">-</p></p>'
let p3 = '<li>' + p2 + '</li>'




         console.log(p)
         $(".shop section").find("div").append(p3);

        let itemCount = $(".shop section").find("div").children().length;
    console.log(itemCount);
        $('header .numb').text(itemCount)
        

     





      })

      

     




      let i = 0;
      $('.box1 .txtBox .btn1').click(function (e) {
          e.preventDefault();
          $(".shop").css({ display: "block" });
          i++;
          console.log(i);

         
        
        });

        $('.empty').click(function(){

          i=0;
          $(".shop").find("span").text(i);
          $(".util").find("span").text(i);
          // $('.shop section').find('div').html('')
          $('.shop section').find('div').empty()
          $('header .numb').text('00')
        })


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
      alert("최대 10개까지"); // 10 이상일 때 경고창 표시
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