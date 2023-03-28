interface Person8 {
  name: string;
  age?: number;
  readonly gender: string;
}

const p81: Person8 = {
  name: "david",
  gender: "male",
};

p81.gender = "female";

//  readonly는 한번 만들어지고 바뀌지 않는 타입
// 우리가 타입스크립트를 사용하는 의도는 컴파일단계에서 에러를 잡고 우리의 의도를 담아서 사용의도를 다른 사람들에게 알려주는 것인데
//이러한 측면에 readonly는 유용하게 쓰일수 있다.
