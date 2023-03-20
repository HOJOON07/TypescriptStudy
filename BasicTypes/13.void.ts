function returnVoid(message: string): void {
  console.log(message);

  return undefined;
  //undefined만 리턴뒤에 유이할게 붙일 수 있다.
}
//이 함수를 가지고 아무것도 하지 않겠다.라고 명시적으로 표현하는 것.
const r: undefined = returnVoid("리턴이 없다.");
// r 은 보이드 타입.
//undefined를 할당할수 없다.
