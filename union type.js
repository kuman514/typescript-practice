"use strict";
// any는 정말로 모든 타입이 될 수 있지만,
// Union 타입은 any보단 조금 더 구체적인 타입으로 설정할 수 있다.
let realAny;
let unionType;
realAny = null;
realAny = undefined;
realAny = 'string';
realAny = 100;
// unionType = null;
// unionType = undefined;
unionType = 'string';
unionType = 100;
// 즉, Union 타입은 [타입1 Or 타입2 Or ... Or 타입n]
// Union 타입으로 지정된 변수들을
// 타입 단언을 통해 받아들여지는 타입의 범위를 지정하기도 한다.
