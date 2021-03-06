// type annotation
// number
const age = 32

// string
const word = 'playground'

// boolean
const isUpdated = true

// array
const fruits: string[] = ['Apple', 'Orange', 'Banana']
const values: (string | number)[] = ['Apple', 2, 'Orange', 3, 4, 'Banana']

// object
let employee: {
  id: number
  name: string
}

export type User = {
  age?: number
  name?: string
}

export const registerUser = (user: User) => {}

export function toString(): void {
  console.log({ age, word, isUpdated, fruits, values, employee })
}

// promise
export const waitString = (duration: number): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`${duration}ms passed`), duration)
  })
}

export const waitNumber = (duration: number): Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(duration), duration)
  })
}

export const waitAll = (): Promise<[string, number, string]> => {
  return Promise.all([waitString(1000), waitNumber(1000), waitString(1000)])
}
