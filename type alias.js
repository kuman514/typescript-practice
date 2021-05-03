"use strict";
// 타입 별칭(Type Alias)은 이미 있는 타입의 다른 이름, 즉 별명을 붙여주는 기능이다.
// 만들어진 타입의 reference로 쓰이지 실제 타입이 만들어지는 것은 아니다.
let aliasedVar;
aliasedVar = 'string value';
aliasedVar = 12345;
/*
function test(arg: string | number): string | number {
  return arg;
}
*/
function returnStringOrNumber(arg) {
    return arg;
}
let person = ['koishi', 514];
// 위처럼 튜플 타입에 별칭을 부여함으로써 여러 군데서 활용할 수 있다.
// ===============================================================
// 예시 3: 제네릭(Generic)
// 클래스 제네릭
class Queue {
    constructor() {
        this.contain = [];
    }
    push(item) {
        this.contain.push(item);
    }
    pop() {
        return this.contain.shift();
    }
    front() {
        return this.contain[0];
    }
}
const numberQueue = new Queue();
const stringQueue = new Queue();
numberQueue.push(514);
stringQueue.push('koishi');
const customQueue = new Queue();
customQueue.push({ name: 'koishi', code: 514 });
// 함수 제네릭
function sort(array) {
    array.sort((a, b) => {
        if (a > b) {
            return -1;
        }
        else if (a < b) {
            return 1;
        }
        return 0;
    });
}
const arr = [19, 41, 52, 73, 44, 18, 2, 37, 34];
sort(arr);
// ===============================================================
