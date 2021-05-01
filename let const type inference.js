"use strict";
/// let과 const의 타입 추론은 서로 다르다.
// a는 명시적으로 지정된 string 타입
let a = 'a is an implicit string';
// b는 타입 추론에 의한 string 타입
let b = 'b is an inferred string';
// c는 명시적으로 지정된 string 타입
const c = 'c is an implicit string';
// d는 타입 추론에 의한 리터럴 타입 'd is a literal type'
const d = 'd is a literal type';
