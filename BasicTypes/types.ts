function add(n1, n2) {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    throw new Error("타입 에러");
  }
  return n1 + n2;
}

function addts(n1: number, n2: number) {
  return n1 + n2;
}

const reverse = (s) => {
  return s.split("").reverse().join("");
};
const reverse2 = (s) => {
  return s.split("").reverse().join("");
};

let isDone = false; // 타입 어노테이션
isDone = true;
console.log(typeof isDone);
let isOk = true;
// let isNotOk: boolean = new Boolean(true);
