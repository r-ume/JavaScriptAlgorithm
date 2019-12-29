import HelloImpl from './interface/hello'
import Playground from './playground'
import { toString, waitString, waitNumber, waitAll, registerUser, User } from './type_annotations'
import * as playgroundEnum from './enum'
import { Add, Substract, Multiply, Divide } from './calculator'

// interface
console.log(HelloImpl.greeting('typescript!'))
console.log(HelloImpl.greeting())

// playground
const playground = new Playground("romukey's typescript playground")
console.log({ keyword: playground.getKeyword() })
playground.setKeyword('new keyword')
console.log({ keyword: playground.getKeyword() })

// type_annotations
toString()

waitString(1000).then((res) => console.log({ res }))

waitNumber(1000).then((res) => console.log({ res }))

const asyncFunc = async (): Promise<[string, number, string]> => {
  return await waitAll()
}

const user1 = {
  age: 26,
  name: 'Taro',
  gender: 'male',
}

// const user2 = {
//   gender: 'male',
//   graduate: 'Tokyo',
// }

registerUser(user1)
// registerUser(user2) // no properies in common in user2

console.log(asyncFunc())

// enum
console.log({ mediaType: playgroundEnum.getMedia('Forbes') })

// calculator
console.log(Add(3, 5))
console.log(Substract(6, 2))
console.log(Multiply(3))
console.log(Divide(10))
