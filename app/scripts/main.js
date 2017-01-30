(function($){
  "use strict"

  $(function(){

    $(".section ul").hide();

    $( ".section h1" ).click(function(){
      console.log('testing');
      $(".section h1").removeClass("clickedOn");
      $( this ).addClass( "clickedOn" );
      $(".section ul").slideUp();
      $(this).next().slideDown();
    });

  });
})(jQuery);
