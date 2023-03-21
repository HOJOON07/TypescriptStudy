"use strict";
let x;
x = ["hello", 20]; //순서도 맞아야 하고 타입도 맞아야 함. 길이도 맞아야 함.
x = [10, "mark"]; //에러임.
x[3] = "world";
//Type '"world"' is not assignable to type 'undefined'
x[2];
// uple type '[string, number]' of length '2' has no element at index '2'
const person = ["mark", 20];
const [first, second] = person; //구조분해할당
//first : string
//second : number
