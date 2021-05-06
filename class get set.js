"use strict";
class GetSetPerson {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    // class의 getter과 setter은 ES6의 방식대로 작성하면 된다.
    get name() {
        return this._name;
    }
    // 밖에서 읽기만 하고자 할땐, set을 생략한다.
    set name(name) {
        this._name = name;
    }
}
const getset = new GetSetPerson('koishi', 1);
console.log(getset.name);
getset.name = 'koishie';
console.log(getset.name);
