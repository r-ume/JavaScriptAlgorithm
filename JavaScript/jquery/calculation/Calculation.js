// main 

$(function(){

  // global variables
  var priceBase = $(".basePrice1").text();
  var priceOptions = $("optionTotal").text();
  var priceTotal = priceBase + priceOptions;
  var optionsPrice = 0;
  var basePrice = priceBase;

  $(".priceTotal").text(priceTotal);

  

});