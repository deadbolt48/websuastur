//Script Nuestros Servicios

window.onload=function(){
    $(".burguermenu").fadeTo(600, 1);
    $("body").fadeTo(600, 1);

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
