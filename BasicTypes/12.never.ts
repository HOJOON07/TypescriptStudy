function error(message: string): never {
  throw new Error(message);
}

function fail() {
  return error("failed");
}

function infiniteLoop(): never {
  while (true) {}
}

// let a: string = "hello";

// if (typeof a !== "string") {
//   a;
// }

declare const a: string | number;

if (typeof a !== "string") {
  a;
}

type Indexable<T> = T extends string ? T & { [index: string]: any } : never;
//조건부 타입.
//타입이 변수처럼 쓰이는 제네릭
//t가 만약에 string이면 T를 T & { [index: string]: any }  보내고
//아니면 never라고 보내라
type objectIndexable = Indexable<{}>;
//objectIndexable :never

const b: Indexable<{}> = "";
// never인데 왜 할당하려고 하냐면서 오류가 남
