

$(function(){

  var priceBase = removeFigure($(".basePrice1").text());
  var priceOptions = removeFigure($(".optionTotal")).text();
  var priceTotal = priceBase + priceOptions;
  var optionsPrice = 0;
  var basePrice = priceBase;

  $(".priceTotal").text(addFigure(priceTotal));

  $(".option1 :checkbox").click(function() {
    optionsPrice = 0;
    $(".options1 :checkbox:checked").each(function() {
      optionsPrice = optionsPrice + removeFigure($(this).parent("label").find(".optionPrice").text();
    });

    var timerPrice = setInterval(function(){
      if(priceOptions != optionsPrice){
        if(priceOptions < optionsPrice){
          priceOptions = priceOptions + Math.round((optionsPrice - priceOptions) / 2);
        } else{
          priceOptions = priceOptions - Math.round((priceOptions - optionsPrice) / 2);
        }

        $(".optionTotal1").text(addFigure(priceOptions));
        $(".total1").text(addFigure(priceBase + priceOptions));
      } else{
        clearInterval(timerPrice);
      }
    })
  }, 17);
});

$("select.num").change(function(){
  basePrice = removeFigure($(this).find("option:selected").attr("data-price"));

  var timerPrice = setInterval(function(){
    if(priceBase != basePrice){
      if(priceBase < basePrice){
        priceBase = priceBase + Math.round((basePrice - priceBase) / 2);
      } else{
        priceBase = priceBase - Math.round((priceBase - basePrice) / 2);
      }
    }

    $(".basePrice1").text(addFigure(priceBase + priceOptions));
    $(".total1").text(addFigure(priceBase + priceOptions));
  }else{
    clearInterval(timerPrice);
  }

  }, 17);
function addFigure(str){
  var num = new String(str).replace(/,/g, "");
  while(num != (num = num.replace(/^(-?\d+)(\d{3})/, "$1,$2")));
  return num;
}

function removeFigure(str){
  var num = new String(str).replace(/,/g, "");
  num = Number(num);
  return num;
}
});
