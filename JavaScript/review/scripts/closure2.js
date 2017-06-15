function celebrity_name(first_name){
	var name_intro = "This celebrity is ";

	function last_name(the_last_name){
		return name_intro + first_name + the_last_name;
	}

	return last_name;
}

/*
 * function last_name(the_last_name){
		return name_intro + first_name + the_last_name;
 */
console.log(celebrity_name("Michel"));

var mjName = celebrity_name("Michel");

// This celebrity is MichelJackson
console.log(mjName("Jackson"));