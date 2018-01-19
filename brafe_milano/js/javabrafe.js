$(document).ready(function(){
  var aux = 0;
  //funcoes Produtos
  $(".produtos-item").mouseover(function(){
    $(this).css("transition", "0.3s");
    $(this).css("background", "#333");
    $(this).css("color", "white");
  });
  $(".produtos-item").mouseleave(function(){
    $(this).css("background", "none");
    $(this).css("color", "black");
  });
  $(".produtos-item").click(function(){

      $(".produtos-item").css("display", "none");
      $(this).css("display", "block");
      $(this).css("width", "auto");
      $(this).children("h2").css("float", "left");
      $(this).children("h2").css("margin", "0 10px");
      $(this).children("p").css("font-size", "1.25em");
      $(this).children("p").css("margin", "50px 10px");
      $(this).children("p").css("display", "block");
      $(this).css("text-align", "right");
      window.setTimeout(function(){
        aux = 1;
      }, 300);
  });
  $("section").click(function(){
    if(aux){
      window.setTimeout(function(){
        $(".produtos-item").css("display", "block");
        $(".produtos-item").css("width", "300px");
        $(".produtos-item").children("h2").css("float", "none");
        $(".produtos-item").children("h2").css("margin", "none");
        $(".produtos-item").children("h2").css("margin-bottom", "10px");
        $(".produtos-item").children("p").css("font-size", "0.875em");
        $(".produtos-item").children("p").css("margin", "0 10px");
        $(".produtos-item").children("p").css("display", "block");
        $(".produtos-item").css("text-align", "center");
        aux = 0;
      }, 200);
    }
  });

  //Funcoes footer
  $("footer img").mouseover(function(){
    $(this).css("transition", "0.3s");
    $(this).css("border-bottom", "3px solid #492901");
  });
  $("footer img").mouseleave(function(){
    $(this).css("border-bottom", "none");
  });
  $("footer img").click(function(){
    $('html').animate({ scrollTop: 0 }, 'slow');
  });
});
