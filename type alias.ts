// 타입 별칭(Type Alias)은 이미 있는 타입의 다른 이름, 즉 별명을 붙여주는 기능이다.
// 만들어진 타입의 reference로 쓰이지 실제 타입이 만들어지는 것은 아니다.

// 타입 별칭이 쓰이는 예시를 알아보자.

// 예시 1: Union 타입을 일일히 칠 수 없을 때 (Aliasing Union Type)
type StringOrNumber = string | number;
let aliasedVar: StringOrNumber;
aliasedVar = 'string value';
aliasedVar = 12345;

/*
function test(arg: string | number): string | number {
  return arg;
}
*/
function returnStringOrNumber(arg: StringOrNumber): StringOrNumber {
  return arg;
}
// ===============================================================

// 예시 2: 튜플 타입에 별칭 부여하기 (Aliasing Tuple)
type PersonTuple = [string, number];
let person: PersonTuple = ['koishi', 514];
// 위처럼 튜플 타입에 별칭을 부여함으로써 여러 군데서 활용할 수 있다.
// ===============================================================

// 예시 3: 제네릭(Generic)
// 클래스 제네릭
class Queue<T> {
  private contain: T[];
  constructor() {
    this.contain = [];
  }
  push(item: T): void {
    this.contain.push(item);
  }
  pop(): T | undefined {
    return this.contain.shift();
  }
  front(): T | undefined {
    return this.contain[0];
  }
}
const numberQueue: Queue<number> = new Queue<number>();
const stringQueue: Queue<string> = new Queue<string>();
numberQueue.push(514);
stringQueue.push('koishi');
type NameAndCode = {name: string, code: number};
const customQueue: Queue<NameAndCode> = new Queue<NameAndCode>();
customQueue.push({name: 'koishi', code: 514});

// 함수 제네릭
function sort<T>(array: T[]) {
  array.sort((a: T, b: T): number => {
    if (a > b) {
      return -1;
    } else if (a < b) {
      return 1;
    }
    return 0;
  });
}
const arr: number[] = [19,41,52,73,44,18,2,37,34];
sort(arr);
// ===============================================================