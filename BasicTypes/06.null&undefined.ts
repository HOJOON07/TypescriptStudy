let MyName: string = null; //strictNullCheck 옵션 켜져있어서 에러가 남.

let u: undefined = null;

let v: void = undefined; //값을 넣어줘야 하는데 null은 안되고 오로지 undefined 만 가능

let union: string | null = null; // string, null 둘 다 넣을수 있는게 union

union = "MARK";
