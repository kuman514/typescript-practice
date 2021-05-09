"use strict";
// keyof는 Object들의 key들의 리터럴 값을 가져온다.
// 이 키워드를 제네릭의 제한에도 활용할 수 있다.
function setProperty(obj, key, value) {
    obj[key] = value;
}
function getProperty(obj, key) {
    return obj[key];
}
function getProperty2(obj, key) {
    return obj[key];
}
const samplePerson = {
    name: 'Steve',
    age: 28
};
setProperty(samplePerson, 'name', 'Jack');
getProperty(samplePerson, 'age');
// samplePerson의 멤버만을 조작하거나 열람하도록 제한할 수 있다.
// 즉, keyof T는 'T의 key의 리터럴 타입 1' | 'T의 key의 리터럴 타입 2' | ... | 'T의 key의 리터럴 타입 n'
