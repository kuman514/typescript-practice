"use strict";
class StaticPerson {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    print() {
        console.log(`${this._name} ${StaticPerson.lastName} in ${StaticPerson.CITY}.`);
    }
    // static 메소드는 클래스 멤버 함수로 쓰인다.
    static Talk() {
        console.log('Hello');
    }
}
// static 프로퍼티는 클래스명.프로퍼티명 형태로 사용한다.
// static 변수는 클래스 멤버 변수로 사용된다.
StaticPerson.CITY = '';
StaticPerson.lastName = 'Lee';
StaticPerson.Talk();
