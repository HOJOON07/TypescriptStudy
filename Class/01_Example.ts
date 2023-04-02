class PersonClass {
  name;

  //생성자 키워드 constructor
  constructor(name: string) {
    this.name = name;
  }
}
//PersonClass라는 이름의 클래스이고 object를 만들었을 때 name이라는 property를 가지고 생성자에 name:string으로 타입이 설정되어있는것.

const classPerson = new PersonClass("mark");

console.log(classPerson);
