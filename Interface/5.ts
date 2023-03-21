interface IPerson1 {
  name: string;
  age?: number;
  hello(): void;
}
//implements를 사용해서 interface를 클래스로 사용할수있다.
class Person implements IPerson1 {
  name: string; //초기값을 지정해줘야함.
  age?: number | undefined;
  constructor(name: string) {
    this.name = name;
  } //이게 없었다면 원래 name에 빨간줄이 있었음.

  hello(): void {
    // throw new Error("Method not implemented.");
    console.log(`안녕하세요! ${this.name} 입니다.`);
  }

  //여기는 실제로 구현체
}

const personIC: IPerson1 = new Person("mark");
personIC.hello();
