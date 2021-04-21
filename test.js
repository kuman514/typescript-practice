"use strict";
function test() {
    let comment = 'TEST';
    comment = '5';
    console.log(comment);
}
class Test2 {
    constructor() {
        console.log('TEST 2');
    }
}
test();
new Test2();
