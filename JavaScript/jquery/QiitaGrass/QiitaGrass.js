$(function(){

	// 
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

	function onSucceed(data){
	};

});