export default class Playground {
  private keyword: string

  public constructor(keyword: string) {
    this.keyword = keyword
  }

  public getKeyword(): string {
    return this.keyword
  }

  public setKeyword(keyword: string): void {
    this.keyword = keyword
  }
}
