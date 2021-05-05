class Parent {
  private privateProp: string;
  protected protectedProp: string;

  // private는 상속 관계 없이 클래스 외부의 모든 접근을 차단하지만,
  // protected는 상속 관계에 있는 클래스끼리의 접근을 허용한다.

  constructor (p1: string, p2: string) {
    this.privateProp = p1;
    this.protectedProp = p2;
  }
}

class Child extends Parent {
  constructor(p1: string, p2: string) {
    // 상속받은 자식 클래스는 반드시 생성자 안에 super()를 넣어줘야 한다.
    // 이때, super()안의 파라미터는 부모 생성자의 파라미터의 타입과 동일해야 한다.
    // super()는 클래스 외부에서 호출하는 것과 같다.
    super(p1, p2);
    this.protectedProp = 'protected prop';
    // this.privateProp = 'private';
    // protected 함수를 호출해서 그 안의 private 멤버를 출력하는 것에 주의하자.
  }
}

const child = new Child('yasuo', 'science');