$(document).ready(function(){
  $('section ul').draggable({
    containment: 'children',
    axis: "y", // y축 (수직)으로만 드래그
    grid: [1, 1], // 매우 부드러운 이동을 위한 그리드 설정
    snap: false,
    drag: function(event, ui) {
      // 드래그한 거리를 가져와서 움직입니다.
      var dragDistance = ui.position.right;
      
      // 드래그한 거리를 해당 요소의 left 속성에 적용합니다.
      
      
      
    }
  });
  });