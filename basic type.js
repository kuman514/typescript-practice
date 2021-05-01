"use strict";
// TypeScript 자료형
// TypeScript의 자료형은 JavaScript 기본 자료형을 포함한다.
// Boolean, Number, String, Null, Undefined, Symbol(ES6), Array(object)
// TypeScript에서는 프로그래밍에 도움이 될 자료형이 더 있다. (주로 함수 리턴형에 쓰임)
// Any, Void, Never, Enum, Tuple(obrjct)
// JavaScript object는 reference
// Primitive Type은 value
// 리터럴
// Array: Array<T>나 T[]로 사용 가능
// 근데 써보니까 Array<T>는 안된다고 알려줌.
// let arrayList1: Array<number> = [1, 2, 3];
// Array type using 'Array<T>' is forbidden. Use 'T[]' instead.
let arrayList2 = [4, 5, 6, 7, 8];
/*
Any: any (아무 타입이나 가질 수 있다)
TypeScript에서는 최대한 쓰지 않는 것이 좋다. 타입 검사를 정상적으로 할 수 없기 때문.
컴파일 옵션 중에는 any 사용 시 오류를 내도록 하는 noImplicitAny라는 옵션도 있다.
*/
/*
Void: void (타입이 없다 / 함수 리턴이 없을 때 쓰임)
*/
/*
Never: never (함수 리턴에 주로 사용된다)
아래 코드와 같은 경우에 주로 쓰인다.
*/
// Never 사용 예시 =====================================
function throwError(message) {
    // 절대 종료 지점에 닿을 수 없는 함수가 종료 지점에 닿았을 경우 오류 throw
    throw new Error(message);
}
function fail() {
    // never 타입 리턴으로 간주될 때
    return throwError('Something Failed');
}
function infiniteLoop() {
    while (true) {
        // never를 리턴하는 함수는 절대 종료 지점에 닿을 수 없도록 만들어야 한다
    }
}
// ====================================================
/*
Enum: C의 enum과 완벽하게 동일하다.
*/
// Enum 사용 예시 =====================================
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 0] = "Red";
    Color1[Color1["Green"] = 1] = "Green";
    Color1[Color1["Blue"] = 2] = "Blue";
})(Color1 || (Color1 = {}));
;
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
;
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 1] = "Red";
    Color3[Color3["Green"] = 3] = "Green";
    Color3[Color3["Blue"] = 4] = "Blue";
})(Color3 || (Color3 = {}));
;
var Color4;
(function (Color4) {
    Color4[Color4["Red"] = 10] = "Red";
    Color4[Color4["Green"] = 25] = "Green";
    Color4[Color4["Blue"] = 50] = "Blue";
})(Color4 || (Color4 = {}));
;
// ===================================================
/*
Tuple: 배열인데 타입이 한 가지가 아닌 경우에 쓰임
배열과 같이 객체 타입으로, 꺼내 사용할 때 주의가 필요하다.
*/
// Tuple 사용 예시 =====================================
let exTuple;
exTuple = ['koishi', 514]; // 가능
// exTuple = [514, 'koishi']; // 불가
// ====================================================
