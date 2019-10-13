export interface HelloInterface {
  greeting(name: string): string
}

export class HelloImpl implements HelloInterface {
  public greeting(name: string): string {
    return `Hello ${name}`
  }
}

export default new HelloImpl()
