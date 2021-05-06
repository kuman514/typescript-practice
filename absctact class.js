"use strict";
// Java에서 쓰던 abstract class처럼 하면 될 것 같다.
class AbsPerson {
    constructor() {
        this._name = 'James';
    }
}
class ImplPerson extends AbsPerson {
    setName(name) {
        this._name = name;
    }
}
// abstract class는 new를 통한 인스턴스로 생성할 수 없다.
// abstract class를 상속한 class는 반드시 abstract 메소드를 구현해야 한다.
