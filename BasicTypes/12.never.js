"use strict";
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("failed");
}
function infiniteLoop() {
    while (true) { }
}
if (typeof a !== "string") {
    a;
}
//objectIndexable :never
const b = "";
// never인데 왜 할당하려고 하냐면서 오류가 남
