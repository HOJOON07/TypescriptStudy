"use strict";
function returnAny(message) {
    console.log(message);
}
const any1 = returnAny("리턴은 아무거나");
//any1:any
//무엇이든 들어올 수 있음.
any1.toString();
//타입 에러가 안 뜬다. any1이 무엇을 할지 아예 모르는 상태 -> 어떤 것이든 할 수 있다.
// 로그로 표현되는 역할만 하는 경우에 any타입을 쓸 수 있다.
let looselyTyped = {};
// const d = looselyTyped.a.b.c.d; //개체를 통해서 any는 계속 전파됨
function leakingAny(obj) {
    const a = obj.num; // 타입 누수를 막는 방법.
    const b = a + 1; //any
    return b;
}
const c = leakingAny({ num: 0 }); //any
const d = c.indexOf("0");
