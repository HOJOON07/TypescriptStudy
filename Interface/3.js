"use strict";
// a['index'] -> ["whatever"] -> ["ㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㄴㅁ"]
function hello4(person) {
    console.log(`안녕하세요 ${person.name} 입니다.`);
}
const p31 = {
    name: "mark",
    age: 29,
};
const p32 = {
    name: "anna",
    systers: ["sung", "chan"],
};
const p33 = {
    name: "Bokda",
    father: p31,
    mother: p32,
};
