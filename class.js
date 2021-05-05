"use strict";
class ClassPerson {
    // 생성자(Constructor)가 없으면 디폴트 생성자가 만들어짐.
    // 만약 사용자 생성 생성자가 하나라도 있으면, 디폴트 생성자는 사라짐.
    constructor(name, address) {
        // TypeScript의 클래스의 접근 제어자는 public이 디폴트이다.
        this.name = '';
        this.age = 0;
        this.address = '';
        this.helloES6 = () => {
            console.log(`반가워~ ${this.name}라고 해`);
        };
        this.name = name;
        this.address = address;
    }
    helloES5() {
        console.log(`안녕~ ${this.name}라고 해`);
    }
}
const testPerson = new ClassPerson('John Doe', 'Nowhere');
