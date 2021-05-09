"use strict";
// 제네릭(Generic)이란
// 타입별로 일일히 함수를 중복 정의하거나 any 타입을 쓰는 일 없이
// 데이터 타입을 일반화시킬 수 있는 방법이다.
// 제네릭 예시 1 (함수에 쓰이는 제네릭)
function getIt(message) {
    return message;
}
getIt('Koishi').length;
getIt(514);
// 제네릭 예시 2 (배열에도 쓰이는 제네릭)
const arrayString = new Array();
// 제네릭 예시 3 (함수 제네릭 배열)
function getIt2(messages) {
    return messages[0];
}
const helloGen = (message) => {
    return message;
};
helloGen(false);
// 제네릭 예시 5 (클래스에 제네릭)
class DataContain {
    constructor(name, data) {
        this._name = name;
        this._data = data;
    }
}
const mark = new DataContain('Mark', 'DFFFDASDWG');
// 제네릭 예시 6 (제네릭 타입 상속)
class GenericInherit {
    constructor(name, data) {
        this._name = name;
        this._data = data;
    }
}
// 제네릭 예시 7 (다수 타입)
class MultipleGeneric {
    constructor(name, data1, data2) {
        this._name = name;
        this._data1 = data1;
        this._data2 = data2;
    }
}
