"use strict";
//implements를 사용해서 interface를 클래스로 사용할수있다.
class Person3 {
    constructor(name) {
        this.name = name;
    } //이게 없었다면 원래 name에 빨간줄이 있었음.
    hello() {
        // throw new Error("Method not implemented.");
        console.log(`안녕하세요! ${this.name} 입니다.`);
    }
}
const personIC = new Person("mark");
personIC.hello();
