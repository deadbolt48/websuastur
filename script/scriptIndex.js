//Javascript

window.onload=function(){
    $("#panoramicaimg").fadeTo(1000, 0.2);
    $("#bienvenido").fadeTo(3000, 1);
    $(".burguermenu").fadeTo(700, 1);


    $('.burguermenu').click(function(){
        $(this).toggleClass('open');
        openNav();
	});

    }

    function openNav() {
        $("#myNav").css("height", "100%");
        $("#myNav").css("width", "100%");    
      }

      function closeNav() {
        $("#myNav").css("height", "0%");
        $("#myNav").css("width", "0%");
      } 

 
  




