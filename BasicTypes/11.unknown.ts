declare const maybe: unknown;

const aNumber: number = maybe;
//unknown은 넘버에 바로 할당 할수 없다.

if (typeof maybe === "number") {
  const aNumber: number = maybe;
}

if (maybe === true) {
  const aBoolean: boolean = maybe; //true

  const aString: string = maybe;
  //if문 안에 있는 maybe는 true이기 때문에 boolean은 가능하지만 astring은 string이기 때문에 안된다.
}

if (typeof maybe === "string") {
  maybe; //maybe는 스트링이 된다.
  const aString: string = maybe;

  const aBoolean: boolean = maybe;
}
