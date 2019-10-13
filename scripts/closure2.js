function celebrityName(firstName) {
  const nameIntro = 'This celebrity is '

  function lastName(theLastName) {
    return nameIntro + firstName + theLastName
  }

  return lastName
}

/*
 *  At this juncture, the celebrity_name outer function has returned.
 *  result -
    function last_name(the_last_name){
		  return name_intro + first_name + the_last_name;
 	  }
 */

console.log(celebrityName('Michel'))

const mjName = celebrityName('Michel')

// The closure (lastName) is called here after the outer function has returned above.
// Yet, the closure still has access to the outer function's variables and parameter
// This celebrity is MichelJackson
console.log(mjName('Jackson'))
