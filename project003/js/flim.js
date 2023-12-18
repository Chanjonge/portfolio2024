

$(document).ready(function(){

    
    $('.flim1 .imgBox1 p').removeClass('on');
    $('.flim1 .imgBox2 p').removeClass('on');
    $('.flim1 .imgBox3 p').removeClass('on');
    $('.flim1 .imgBox4 p').removeClass('on');



    $('.flim1 .imgBox1').click(function(){
        $('.flim1 .imgBox1 p').toggleClass('on');
    });


    $('.flim1 .imgBox2').click(function(){
        $('.flim1 .imgBox2 p').toggleClass('on');
    });

    $('.flim1 .imgBox3').click(function(){
        $('.flim1 .imgBox3 p').toggleClass('on');
    });


    $('.flim1 .imgBox4').click(function(){
        $('.flim1 .imgBox4 p').toggleClass('on');
    });




    $('.flim1 .imgBox1 a').click(function(){

        $('.flim1').css({'opacity':0})
        $('.flim3').css({'opacity':0})
        $('.flim4').css({'opacity':0})
        $('.flim5').css({'opacity':0})
        $('.flim2').css({ 
        'left': 0 ,
        'top': 0 ,
     'opacity' : 1})

        var text = "\n멈춰버린 꿈\n지나가버린 꿈\n이 비가 그치면, 괜찮아질까요?\n";
  var index = 0;
  var typingEffect = function() {
    if (index < text.length) {
      var char = text[index] === '\n' ? '<br>' : text[index];
      $('.txtBox2 p').append(char);
      index++;
      setTimeout(typingEffect, 100);
    }
  };
  if ($('.txtBox2 p').text().trim() === "") {
    typingEffect();
  }

    });


    $('.flim1 .imgBox2 a').click(function(){

        
        $('.flim1').css({'opacity':0})
        $('.flim2').css({'opacity':0})
        $('.flim4').css({'opacity':0})
        $('.flim5').css({'opacity':0})
        $('.flim3').css({ 
            'left': 0 ,
            'top': 0 ,
         'opacity' : 1 ,
            'display':'block'})





         var text = "\n후지시마 카나코.\n이 지상에서\n유일한 아름다운 생명체\n";
  var index = 0; 
  var typingEffect = function() {
    if (index < text.length) {
      var char = text[index] === '\n' ? '<br>' : text[index];
      $('.txtBox2 p').append(char);
      index++;
      setTimeout(typingEffect, 100);
    }
  };
  if ($('.txtBox2 p').text().trim() === "") {
    typingEffect();
  }
    })



    $('.flim1 .imgBox3 a').click(function(){

        
      $('.flim1').css({'opacity':0})
      $('.flim2').css({'opacity':0})
      $('.flim3').css({'opacity':0})
      $('.flim5').css({'opacity':0})
      $('.flim4').css({ 
          'right': 0 ,
          'bottom': 0 ,
       'opacity' : 1 ,
          'display':'block'})


  var text = "\n너를 만나서\n이 세상이,\n사랑스러워졌어\n";
        var index = 0; 
        var typingEffect = function() {
          if (index < text.length) {
            var char = text[index] === '\n' ? '<br>' : text[index];
            $('.txtBox2 p').append(char);
            index++;
            setTimeout(typingEffect, 100);
          }
        };
        if ($('.txtBox2 p').text().trim() === "") {
          typingEffect();
        }



        });


    $('.flim1 .imgBox4 a').click(function(){

        
      $('.flim1').css({'opacity':0})
      $('.flim2').css({'opacity':0})
      $('.flim3').css({'opacity':0})
      $('.flim4').css({'opacity':0})
      $('.flim5').css({ 
          'right': 0 ,
          'top': 0 ,
       'opacity' : 1 ,
          'display':'block'})
        


        var text = "\n나의 내일은\n너에게는 어제고,\n나의 10년 후는\n 너에게는 10년 전이야.";
        var index = 0; 
        var typingEffect = function() {
          if (index < text.length) {
            var char = text[index] === '\n' ? '<br>' : text[index];
            $('.txtBox2 p').append(char);
            index++;
            setTimeout(typingEffect, 100);
          }
        };
        if ($('.txtBox2 p').text().trim() === "") {
          typingEffect();
        }
          });


      $('.nav li:nth-child(1)').click(function(){

        $('.flim1').css({'opacity':0})
      $('.flim3').css({'opacity':0})
      $('.flim4').css({'opacity':0})
      $('.flim5').css({'opacity':0})
      $('.flim2').css({ 
          'left': 0 ,
          'top': 0 ,
       'opacity' : 1 ,
          'display':'block'})
      $('header nav li:nth-child(4)').addClass('on')



          var text = "\n멈춰버린 꿈\n지나가버린 꿈\n이 비가 그치면, 괜찮아질까요?\n";
  var index = 0;
  var typingEffect = function() {
    if (index < text.length) {
      var char = text[index] === '\n' ? '<br>' : text[index];
      $('.txtBox2 p').append(char);
      index++;
      setTimeout(typingEffect, 100);
    }
  };
  setTimeout(function() {
    $('.txtBox2 p').empty();
    if ($('.txtBox2 p').text().trim() === "") {
      typingEffect();
    }
  }, 1000);

      })



      $('.nav li:nth-child(2)').click(function(){

        $('.flim1').css({'opacity':0})
      $('.flim2').css({'opacity':0})
      $('.flim4').css({'opacity':0})
      $('.flim5').css({'opacity':0})
      $('.flim3').css({ 
          'left': 0 ,
          'top': 0 ,
       'opacity' : 1 ,
          'display':'block'})

          var text = "\n후지시마 카나코.\n이 지상에서\n유일한 아름다운 생명체\n";
  var index = 0; 
  var typingEffect = function() {
    if (index < text.length) {
      var char = text[index] === '\n' ? '<br>' : text[index];
      $('.txtBox2 p').append(char);
      index++;
      setTimeout(typingEffect, 100);
    }
  };
  setTimeout(function() {
    $('.txtBox2 p').empty();
    if ($('.txtBox2 p').text().trim() === "") {
      typingEffect();
    }
  }, 1000);

      })



      $('.nav li:nth-child(3)').click(function(){

        $('.flim1').css({'opacity':0})
      $('.flim2').css({'opacity':0})
      $('.flim3').css({'opacity':0})
      $('.flim5').css({'opacity':0})
      $('.flim4').css({ 
          
          'bottom': 0 ,
       'opacity' : 1 ,
          'display':'block'})

          var text = "\n너를 만나서\n이 세상이,\n사랑스러워졌어\n";
        var index = 0; 
        var typingEffect = function() {
          if (index < text.length) {
            var char = text[index] === '\n' ? '<br>' : text[index];
            $('.txtBox2 p').append(char);
            index++;
            setTimeout(typingEffect, 100);
          }
        };
        setTimeout(function() {
          $('.txtBox2 p').empty();
          if ($('.txtBox2 p').text().trim() === "") {
            typingEffect();
          }
        }, 1000);

      })

      $('.nav li:nth-child(4)').click(function(){

        $('.flim1').css({'opacity':0})
      $('.flim2').css({'opacity':0})
      $('.flim3').css({'opacity':0})
      $('.flim4').css({'opacity':0})
      $('.flim5').css({ 
          'right' : 0 ,
          'top': 0 ,
       'opacity' : 1 ,
          'display':'block'})

          var text = "\n나의 내일은\n너에게는 어제고,\n나의 10년 후는\n 너에게는 10년 전이야.";
        var index = 0; 
        var typingEffect = function() {
          if (index < text.length) {
            var char = text[index] === '\n' ? '<br>' : text[index];
            $('.txtBox2 p').append(char);
            index++;
            setTimeout(typingEffect, 100);
          }
        };

        setTimeout(function() {
          $('.txtBox2 p').empty();
          if ($('.txtBox2 p').text().trim() === "") {
            typingEffect();
          }
        }, 1000);

      })








         
})