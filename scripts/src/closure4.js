function celebrityIDCreator(theCelebrities) {
  let i
  const uniqueID = 100
  for (i = 0; i < theCelebrities.length; i++) {
    theCelebrities[i]['id'] = function() {
      console.log('id' + i)
      return uniqueID + i
    }
  }

  console.log(theCelebrities)
  return theCelebrities
}

const actionCelebrities = [{ name: 'Stallone', id: 0 }, { name: 'Cruise', id: 0 }, { name: 'Wills', id: 0 }]

const createIdForActionCelebs = celebrityIDCreator(actionCelebrities)

console.log(createIdForActionCelebs)

const stalloneID = createIdForActionCelebs[0]
console.log('stalloneID')
console.log(stalloneID.id())
