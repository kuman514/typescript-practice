// Java Interface와 사용법이 동일하다고 한다.
// 이 때, 타입은 Object 리터럴 타입.
interface Person {
  name: string,
  code?: number,
  [props: string]: any,
  hello?(): void;
}
// ? 표시는 선택적(Optional)인 프로퍼티(Property)라는 의미.
// 해당 표시가 된 프로퍼티(Property)값을 누락해도 컴파일 에러가 나지 않는다.
// [...] 표시는 indexable type이라고 하는 것인데, 이것도 선택적 프로퍼티이다.
// 이 때, indexable type의 인덱스는 string과 number만 가능하다.

const personExample1: Person = {
  name: 'koishi',
  code: 514,
  hello: (): void => {
    console.log(`우리우리 이쁜 애기~`);
  }
};

const personExample2: Person = {
  name: 'satori',
};

const family: Person = {
  name: 'chireiden',
  older: personExample2,
  younger: personExample1
};

function hello(p: Person): void {
  console.log(`우리우리 이쁜 애기 ${p.name}~`);
}