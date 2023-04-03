class PersonConstructor {
  name: string = "Mark";
  age: number;
  //클래스 기준으로 실제 값이 할당되지 않았기 때문에 알 수 없다. 즉 코드 입장에서는 초기화 된적이 없다. 라고 판단하고 있는 것이다.
  //실제 내부에서 값을 할당해주거나 그런적이 없기때문에.
}

const personCon1 = new PersonConstructor();

console.log(personCon1);
