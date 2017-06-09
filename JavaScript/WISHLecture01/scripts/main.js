$(document).ready(function(){
	var window_width   = $(window).width();
	var main_width     = $(".main_container").width();
	var long_container = $(".long_container");
	var item           = $(".item");
	var side_number    = 0;

	long_container.css("width", main_width * 3.05);
	item.css("width", long_container.width() / 9);

});