// callback practices 

var showLog = function(event){
	console.log(event.currentTarget);
	return false;
};

// Either is possible.
$('#trigger').click(showLog);

$('#trigger').click(function(event){
	console.log(event.currentTarget);
	return false;
});