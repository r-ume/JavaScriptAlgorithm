interface HelloInterface {
  greeting(name?: string): string
}

export class HelloImpl implements HelloInterface {
  public greeting(name?: string): string {
    if (name === undefined) return 'romukey'

    return `Hello ${name.toUpperCase()}`
  }
}

export default new HelloImpl()
