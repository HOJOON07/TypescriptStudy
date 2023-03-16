//자바스크립트
function add(n1, n2) {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    throw new Error("타입 에러");
  }
  return n1 + n2;
}

//타입스크립트
function addts(n1: number, n2: number) {
  return n1 + n2;
}
