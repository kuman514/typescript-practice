"use strict";
class InPerson {
    constructor(name, code) {
        this.name = name;
        this.code = code;
    }
    hello() {
        console.log(`안녕하세요 ${this.code}호의 ${this.name}입니다.`);
    }
    hi() {
        console.log('헬로 안녕');
    }
}
const Mark = new InPerson('Markus', 223);
Mark.hello();
Mark.hi();
