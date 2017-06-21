// main 

$(function(){

  // global variables
  var initialPrice = parseInt($(".basePrice1").text());
  var priceOptions = $("optionTotal").text();

  var priceTotal = initialPrice + priceOptions;
  var optionsPrice = 0;

  $(".priceTotal").text(priceTotal);

  $(".img-responsive").click(function(){
    var galleryPrice = $(this).parent().parent().find("span").attr("data-price");

    var timerPrice = setInterval(function(){
      if(initialPrice != galleryPrice){
        if(initialPrice < galleryPrice){
          initialPrice = initialPrice + Math.round((galleryPrice - initialPrice) / 2); 
        } else{
          initialPrice = initialPrice - Math.round((initialPrice - galleryPrice) / 2); 
        }

        $(".basePrice1").text(initialPrice);
      }else{
        clearInterval(timerPrice);
      }

    }, 17);
  });

  //----- OPEN
  $('[data-popup-open]').on('click', function(e)  {
      var targeted_popup_class = jQuery(this).attr('data-popup-open');
      $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
      $('.popup-inner').html("<h2>Your price is " + initialPrice + "</h2>");
      $('.popup-inner').css("text-align", "center");

      e.preventDefault();
  });

  //----- CLOSE
  $('[data-popup-close]').on('click', function(e)  {
      var targeted_popup_class = jQuery(this).attr('data-popup-close');
      $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

      e.preventDefault();
  });
});
