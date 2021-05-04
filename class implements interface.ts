interface InterPerson {
  name: string,
  code: number,
  hello(): void
}

class InPerson implements InterPerson {
  name: string;
  code: number;

  constructor(name: string, code: number) {
    this.name = name;
    this.code = code;
  }

  hello(): void {
    console.log(`안녕하세요 ${this.code}호의 ${this.name}입니다.`);
  }

  public hi(): void {
    console.log('헬로 안녕');
  }
}

const Mark: InPerson = new InPerson('Markus', 223);
Mark.hello();
Mark.hi();