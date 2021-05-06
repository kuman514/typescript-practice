class StaticPerson {
  // static 프로퍼티는 클래스명.프로퍼티명 형태로 사용한다.
  // static 변수는 클래스 멤버 변수로 사용된다.
  public static CITY: string = '';
  private static lastName: string = 'Lee';
  // 비 static 프로퍼티
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  public print() {
    console.log(`${this._name} ${StaticPerson.lastName} in ${StaticPerson.CITY}.`);
  }

  // static 메소드는 클래스 멤버 함수로 쓰인다.
  public static Talk(): void {
    console.log('Hello');
  }
}

StaticPerson.Talk();