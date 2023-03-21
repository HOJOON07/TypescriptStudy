interface Person3 {
  name: string;
  age?: number;
  [index: string]: any;
}

// a['index'] -> ["whatever"] -> ["ㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㄴㅁ"]

function hello4(person: Person3): void {
  console.log(`안녕하세요 ${person.name} 입니다.`);
}

const p31: Person3 = {
  name: "mark",
  age: 29,
};

const p32: Person3 = {
  name: "anna",
  systers: ["sung", "chan"],
};

const p33: Person3 = {
  name: "Bokda",
  father: p31,
  mother: p32,
};
