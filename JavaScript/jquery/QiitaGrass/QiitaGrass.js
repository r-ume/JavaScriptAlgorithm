$(function(){

	// getting user_id from the form
	$("#form").on("submit", function(event){
		$("#btn-submit").prop("disabled", true);
		var user_id = $("#user_id").val();

		$.ajax({
			type: "GET",
			url: "http://qiita.com/api/v2/users/" + user_id + "/items?page=1&per_page=100",
			success: onSucceed
		});
		// If the event being executed can be stopped, preventDefault cancels the event.
		event.preventDefault();
	});

	// date format
	var format = d3.time.format("%Y-%m-%d");

	function onSucceed(data){
		console.log(data);
		var item_dates = {};
		$.each(data, function(index, value){
			var created_at = format(d3.time.day.floor(new Date(value['created_at'])));
			if (created_at in item_dates){
				item_dates[created_at]++;
			} else{
				item_dates[created_at] = 1;
			}
		});

		drawCalendar(item_dates);
		$("#btn-submit").prop("disabled", false);
	};
});