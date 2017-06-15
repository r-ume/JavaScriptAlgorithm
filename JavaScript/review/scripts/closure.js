function show_name(first_name, last_name){
	var name_intro = "Your name is ";

	// this inner function has access to the outer function's variables, 
	// including the parameter.
	function make_full_name(){
		return name_intro + first_name + last_name;
	}

	return make_full_name();
}

//Your name is Michel Jackson
console.log(show_name("Michel", "Jackson"));