// funcs
// conventional
export function Add(x: number, y: number): number {
  return x + y
}

// arrow function
export const Substract = (x: number, y: number): number => {
  return x - y
}

// optional
export function Multiply(x: number, y?: number): number {
  return y ? x * y : 0
}

// default parameter
export function Divide(x: number, y = 2): number {
  return x / y
}
