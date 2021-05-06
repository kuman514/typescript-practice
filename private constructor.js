"use strict";
class PrivateConstructor {
    constructor() {
    }
    static getInstance() {
        if (PrivateConstructor.instance === null) {
            PrivateConstructor.instance = new PrivateConstructor();
        }
        return PrivateConstructor.instance;
    }
    hello() {
        console.log('hello from singleton');
    }
}
// 생성자의 접근 제어자가 private일 경우, 해당 객체는 외부에서 생성될 수 없다.
// 이 경우, 클래스 내부에서 인스턴스를 생성하도록 해야 하는데,
// 이를 이용한 가장 대표적인 방법인 싱글톤 패턴(Singleton Pattern)이다.
// 싱글톤 패턴은 private 생성자를 이용해서 내부에서만 인스턴스 생성이 가능하도록 한다.
// public static 메소드를 통해 private static 인스턴스 레퍼런스를 획득한다.
// Lazy Loading (Initialization): 최초 실행 시가 아닌, 사용 시에 할당을 하는 방식.
PrivateConstructor.instance = null;
const stp = PrivateConstructor.getInstance();
stp.hello();
