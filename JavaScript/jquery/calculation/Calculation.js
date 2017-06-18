// main 

$(function(){

  // global variables
  var initialPrice = removeComma($(".basePrice1").text());
  var priceOptions = removeComma($("optionTotal").text());
  var priceTotal = initialPrice + priceOptions;
  var optionsPrice = 0;

  $(".priceTotal").text(addComma(priceTotal));

  $(".options1 :checkbox").click(function(){
  	optionsPrice = 0;

  	$(".options1 :checkbox:checked").each(function(){
  		// when parent has a parameter, the selector within the parent function becomes a parent dom.
  		optionsPrice = optionsPrice + removeComma($(this).parent("label").find(".optionPrice").text());
  	});

  	var timerPrice = setInterval(function(){
  		// The Animation goes on until optionsTotal and input optionsPrice get the same. 
  		if(priceOptions != optionsPrice){
  			if(priceOptions < optionsPrice){
  				// To make it look like an animation, 
  				// the half of the difference between optionsTotal and optionsPrice gets added up.
  				priceOptions = priceOptions + Math.round((optionsPrice - priceOptions) / 2); 
  			} else{
  				priceOptions = priceOptions - Math.round((priceOptions - optionsPrice) / 2);
  			}

  			$(".optionTotal").text(addComma(priceOptions));
  			$(".total1").text(addComma(initialPrice + priceOptions));
  		}else{
  			clearInterval(timerPrice);
  		}
  	}, 17);
  });

  $("select.num").change(function(){
  	var selectedPrice = removeComma($(this).find("option:selected").attr("data-price"));

  	var timerPrice = setInterval(function(){
  		if(initialPrice != selectedPrice){
  			if(initialPrice < selectedPrice){
  				initialPrice = initialPrice + Math.round((selectedPrice - initialPrice) / 2); 
  			} else {
  				initialPrice = initialPrice - Math.round((initialPrice - selectedPrice) / 2);
  			}

  			$(".basePrice1").text(addComma(initialPrice + priceOptions));
  			$(".total1").text(addComma(initialPrice + priceOptions));
  		} else {
  			clearInterval(timerPrice);
  		}
  	}, 17);
  });

	// A function that adds comma to yen
	function addComma(str){
	  // 正規表現

	  // g - グローバルオプション 複数回マッチする
	  // ^ - 入力の先頭にはマッチする
	  // 例えば /^A/ は "an A" の 'A' にはマッチするが、"An E" の 'A' にはマッチしない。

	  // \d - 数字
	  // + 直前の文字の連続でもマッチするようにする。
	  // -（ハイフンがわからない) 

	  // カンマがあるところを先になくす。
	  var num = new String(str).replace(/,/g, "");
	  var yenPattern = /^(-?\d+)(\d{3})/;
	  var numWithCommna = num.replace(yenPattern, "$1,$2");
	  return numWithCommna;
	}

	// A function that removes a comma from yen
	function removeComma(str){
	  var num = new String(str).replace(/,/g, "");
	  num = Number(num);
	  return num;
	}

});
