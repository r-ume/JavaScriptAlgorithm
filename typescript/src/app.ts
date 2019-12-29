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

// generics
interface Box<T> {
  value: T
}

const box0: Box<string> = { value: 'test' }
console.log({ box0 })

interface Box1<T extends string | number> {
  value: T
}

const box1: Box1<number> = { value: 100 }

console.log({ box1 })

const pick = <K extends keyof T, T>(key: K, props: T) => {
  return props[key]
}

const obj = {
  name: 'Taro',
  amount: 0,
  flag: false,
}

const value1 = pick('name', obj)
console.log({ value1 })

const value2 = pick('amount', obj)
console.log({ value2 })

const value3 = pick('flag', obj)
console.log({ value3 })
