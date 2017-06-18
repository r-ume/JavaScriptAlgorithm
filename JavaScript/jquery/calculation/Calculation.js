// main 

$(function(){

  // global variables
  var priceBase = $(".basePrice1").text();
  var priceOptions = $("optionTotal").text();
  var priceTotal = priceBase + priceOptions;
  var optionsPrice = 0;
  var basePrice = priceBase;

  $(".priceTotal").text(addComma(priceTotal));


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