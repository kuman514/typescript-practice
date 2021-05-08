// 제네릭(Generic)이란
// 타입별로 일일히 함수를 중복 정의하거나 any 타입을 쓰는 일 없이
// 데이터 타입을 일반화시킬 수 있는 방법이다.

// 제네릭 예시 1 (함수에 쓰이는 제네릭)
function getIt<T>(message: T): T {
  return message;
}
getIt('Koishi').length;
getIt(514);

// 제네릭 예시 2 (배열에도 쓰이는 제네릭)
const arrayString: Array<string> = new Array<string>();

// 제네릭 예시 3 (함수 제네릭 배열)
function getIt2<T>(messages: T[]): T {
  return messages[0];
}

// 제네릭 예시 4
type HelloGeneric = <T>(message: T) => T;
const helloGen: HelloGeneric = <T>(message: T): T => {
  return message;
}
helloGen(false);

// 제네릭 예시 5 (클래스에 제네릭)
class DataContain<T> {
  private _name: string;
  private _data: T;

  constructor(name: string, data: T) {
    this._name = name;
    this._data = data;
  }
}
const mark = new DataContain('Mark', 'DFFFDASDWG');

// 제네릭 예시 6 (제네릭 타입 상속)
class GenericInherit<T extends string | number> {
  private _name: string;
  private _data: T;

  constructor(name: string, data: T) {
    this._name = name;
    this._data = data;
  }
}

// 제네릭 예시 7 (다수 타입)
class MultipleGeneric<T1, T2> {
  private _name: string;
  private _data1: T1;
  private _data2: T2;

  constructor(name: string, data1: T1, data2: T2) {
    this._name = name;
    this._data1 = data1;
    this._data2 = data2;
  }
}