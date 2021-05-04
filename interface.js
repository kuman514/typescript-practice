"use strict";
// ? 표시는 선택적(Optional)인 프로퍼티(Property)라는 의미.
// 해당 표시가 된 프로퍼티(Property)값을 누락해도 컴파일 에러가 나지 않는다.
// [...] 표시는 indexable type이라고 하는 것인데, 이것도 선택적 프로퍼티이다.
// 이 때, indexable type의 인덱스는 string과 number만 가능하다.
const personExample1 = {
    name: 'koishi',
    code: 514,
    hello: () => {
        console.log(`우리우리 이쁜 애기~`);
    }
};
const personExample2 = {
    name: 'satori',
};
const family = {
    name: 'chireiden',
    older: personExample2,
    younger: personExample1
};
function hello(p) {
    console.log(`우리우리 이쁜 애기 ${p.name}~`);
}
