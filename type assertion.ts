// 타입 단언은 TypeScript 컴파일러에게 타입을 알려주는 것을 의미
// 형변환과는 다르다 (형변환은 실제 데이터 구조를 바꾼다)

// 작성자가 해당 변수의 타입을 확신하는 것이 매우 중요하다.
// 조금이라도 확신하지 못한다면 쓰지 말아야 한다.

let someValue: any = 'this is a string';

// 방법 1: 변수 as 강제할타입
let a1: number = (someValue as string).length;

// 방법 2: <강제할타입>변수
// React JSX와 헷갈릴 수 있으므로, 사용하지 않는 것이 좋다고 한다.
let a2: number = (<string>someValue).length;

// 타입 단언은 넓은 타입 -> 좁은 타입으로 강제하는 경우가 대부분.
// 즉, 타입의 범위를 좁힐 때 주로 쓰인다.