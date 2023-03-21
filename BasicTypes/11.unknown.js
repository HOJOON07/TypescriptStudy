"use strict";
const aNumber = maybe;
//unknown은 넘버에 바로 할당 할수 없다.
if (typeof maybe === "number") {
    const aNumber = maybe;
}
if (maybe === true) {
    const aBoolean = maybe; //true
    const aString = maybe;
    //if문 안에 있는 maybe는 true이기 때문에 boolean은 가능하지만 astring은 string이기 때문에 안된다.
}
if (typeof maybe === "string") {
    maybe; //maybe는 스트링이 된다.
    const aString = maybe;
    const aBoolean = maybe;
}
