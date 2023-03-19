const person1 = { name: "mark", age: 39 };

// person1 is not 'object' type.
// person1 is "{name:string, age: number}" type

const person2 = Object.create({ name: "mark", age: 39 });
//내장 전역객체 Object 이걸 이용해서 만들면 안에 들어있는

let ob: object = {};

ob = { name: "makr" };
ob = [{ name: "mark" }];
ob = 39; //error
ob = "mark"; //error
ob = true; //error
ob = null; //error
ob = undefined; //error
ob = Symbol(); //error

declare function create(params: object | null): void;

create({ prop: 0 });

create(null);

create(42);
