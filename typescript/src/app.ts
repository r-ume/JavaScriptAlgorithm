import HelloImpl from './interface/hello'
import Playground from './playground'
import { toString, waitString, waitNumber, waitAll } from './type_annotations'
import * as playgroundEnum from './enum'
import { Add, Substract, Multiply, Divide } from './calculator'

console.log(HelloImpl.greeting('typescript!'))
console.log(HelloImpl.greeting())

const playground = new Playground("romukey's typescript playground")
console.log({ keyword: playground.getKeyword() })
playground.setKeyword('new keyword')
console.log({ keyword: playground.getKeyword() })

// type_annotations
toString()

waitString(1000).then(res => console.log({ res }))

waitNumber(1000).then(res => console.log({ res }))

const asyncFunc = async () => {
  const [a, b, c] = await waitAll()
  console.log({ a, b, c })
}

asyncFunc()

console.log({ mediaType: playgroundEnum.getMedia('Forbes') })

console.log(Add(3, 5))
console.log(Substract(6, 2))
console.log(Multiply(3))
console.log(Divide(10))
