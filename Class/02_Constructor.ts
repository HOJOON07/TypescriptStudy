class PersonConstructor {
  name: string = "Mark";
  age: number;
  //클래스 기준으로 실제 값이 할당되지 않았기 때문에 알 수 없다. 즉 코드 입장에서는 초기화 된적이 없다. 라고 판단하고 있는 것이다.
  //실제 내부에서 값을 할당해주거나 그런적이 없기때문에.
}
// class PersonConstructor {
//   name: string = "Mark";
//   age!: number;
//   //클래스 기준으로 실제 값이 할당되지 않았기 때문에 알 수 없다. 즉 코드 입장에서는 초기화 된적이 없다. 라고 판단하고 있는 것이다.
//   //실제 내부에서 값을 할당해주거나 그런적이 없기때문에.
// }

// const personCon1 = new PersonConstructor();
const personCon1: PersonConstructor = new PersonConstructor();

console.log(personCon1); // name:"Mark"

console.log(personCon1.age); //undefined

//age에 number라고 했는데 코드상에서 값이 할당되지 않았다. 그래서 컴파일러 단계에서 찾을 수가 없다라고 말하는 중이다. 그러나 컴파일러 단계가 아니라 런타임 단계에서 할당된다면?
personCon1.age = 29;

// 그래서 의도적으로 ! 를 달아준다.
// 그러면 클래스 내부에서 값이 넘버로 할당되지 않아도 에러를 일으키지 않겠다고 명시적인 표현을 하는 것.
//그래서 이런 느낌표를 사용할 때는 주의를 해야한다.
