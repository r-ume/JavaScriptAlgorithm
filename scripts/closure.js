function showName(firstName, lastName) {
  const nameIntro = 'Your name is '

  // this inner function has access to the outer function's variables,
  // including the parameter.
  function makeFullName() {
    return nameIntro + firstName + lastName
  }

  return makeFullName()
}

//Your name is Michel Jackson
console.log(showName('Michel', 'Jackson'))
