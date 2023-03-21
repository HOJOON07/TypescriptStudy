interface HelloPerson {
  (name: string, age?: number): void;
  //helloperson을 사용하는 어떠한 개체는 이런 형태의 함수로 작성되어야 한다.
}

const helloPerson1: HelloPerson = (name: string, age: number) => {
  console.log(`안녕하세요 ${name} 입니다.`);
};

helloPerson1("mark", 29);
