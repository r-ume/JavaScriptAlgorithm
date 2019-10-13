function celebrityID() {
  let celebrityID = 999

  // object
  // We are returning an object with some inner functions
  // All the inner functions have access to the outer function's variables
  return {
    getID: function() {
      // This inner function will return the UPDATED celebrityID variable
      // It will return the current value of celebrityID, even after the changeTheID function changes it
      return celebrityID
    },
    setID: function(theNewID) {
      // This inner function will change the outer's function variable anytime.
      celebrityID = theNewID
    },
  }
}

// At this juncture, the celebrityID outer function has returned.
const mjID = celebrityID()
console.log(mjID) // return Object {getID: function, setID: function }

mjID.getID() // 999
mjID.setID(567) // changes the outer function's variable.
mjID.getID() // 567
