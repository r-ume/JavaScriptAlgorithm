// type annotation
// number
const age = 32

// string
const word = 'playground'

// boolean
const isUpdated = true

// array
let fruits: string[] = ['Apple', 'Orange', 'Banana']
let values: (string | number)[] = ['Apple', 2, 'Orange', 3, 4, 'Banana']

// object
let employee: {
  id: number
  name: string
}
employee = { id: 101, name: 'first employee' }

export function toString(): void {
  console.log({ age, word, isUpdated, fruits, values, employee })
}
