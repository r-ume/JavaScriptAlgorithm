$(document).ready(function(){
	var window_width   = $(window).width();
	var main_width     = $(".main_container").width();
	var long_container = $(".long_container");
	var item           = $(".item");
	var slide_number    = 0;

	// editting css dynamtically
	long_container.css("width", main_width * 3.05);
	item.css("width", long_container.width() / 9);

	$(".see_next").click(function(){
		if(slide_number < 6){
			slide_number++;

			if(slide_number == 6){
				$(".see_next").animate({
					opacity: 0
				});
			}else {
				$(".see_next").animate({
					opacity: 1
				});
			}

			if(slide_number == 0){
				$(".see_previous").animate({
					opacity: 0
				});
			}else{
				$(".see_previous").animate({
					opacity: 1
				});
			}

			var item_width   = $(".item").width();
			var pixels_moved = item_width * slide_number;
		
			long_container.animate({
				marginLeft: -pixels_moved
			});
		}
	});

	$(".see_previous").click(function(){
		if(slide_number > 0){
			slide_number--;

			if(slide_number == 0){
				$(".see_previous").animate({
					opacity: 0
				});
			}else {
				$(".see_previous").animate({
					opacity: 1
				});
			}

			if(slide_number == 6){
				$(".see_next").animate({
					opacity: 0
				});
			}else{
				$(".see_next").animate({
					opacity: 1
				});
			}

			var item_width   = $(".item").width();
			var pixels_moved = item_width * slide_number;
		
			long_container.animate({
				marginLeft: -pixels_moved
			});
		}
	});


});