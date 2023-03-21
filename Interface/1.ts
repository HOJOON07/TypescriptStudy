interface person1 {
  name: string;
  age: number;
}

function helloInter(person: person1): void {
  console.log(`안녕하세요! ${person.name}입니다. `);
}

const p1: person1 = {
  name: "mark",
  age: 39,
};

helloInter(p1);
