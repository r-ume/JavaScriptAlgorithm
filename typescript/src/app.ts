import HelloImpl from './interface/hello'
import Playground from './playground'
import * as typeAnnotations from './type_annotations'
import * as playgroundEnum from './enum'
import { Add, Substract, Multiply, Divide } from './calculator'

console.log(HelloImpl.greeting('typescript!'))

const playground = new Playground("romukey's typescript playground")
console.log({ keyword: playground.getKeyword() })
playground.setKeyword('new keyword')
console.log({ keyword: playground.getKeyword() })

typeAnnotations.toString()

console.log({ mediaType: playgroundEnum.getMedia('Forbes') })

console.log(Add(3, 5))
console.log(Substract(6, 2))
console.log(Multiply(3))
console.log(Divide(10))
