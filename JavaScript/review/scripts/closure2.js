function celebrity_name(first_name){
	var name_intro = "This celebrity is ";

	function last_name(the_last_name){
		return name_intro + first_name + the_last_name;
	}

	return last_name;
}

/*
 *  At this juncture, the celebrity_name outer function has returned.  
 *  result - 
    function last_name(the_last_name){
		  return name_intro + first_name + the_last_name;
 	  }
 */

console.log(celebrity_name("Michel"));

var mjName = celebrity_name("Michel");

// The closure (lastName) is called here after the outer function has returned above.
// Yet, the closure still has access to the outer function's variables and parameter
// This celebrity is MichelJackson
console.log(mjName("Jackson"));