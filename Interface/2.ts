interface Person2 {
  name: string;
  age?: number;
}

function hello33(person: Person2): void {
  console.log(`안녕하세요 ${person.name} 입니다.`);
}

hello33({ name: "mark", age: 39 });
hello33({ name: "anna" });
