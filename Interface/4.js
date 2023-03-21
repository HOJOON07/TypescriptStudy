"use strict";
const p41 = {
    name: "mark",
    age: 39,
    hello: function () {
        console.log(`안녕하세요 ${this.name}`);
    },
};
const p42 = {
    name: "mark",
    age: 39,
    hello() {
        console.log(`안녕하세요 ${this.name}`);
    },
};
p41.hello();
p42.hello();
