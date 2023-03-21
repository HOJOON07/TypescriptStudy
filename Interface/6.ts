interface IPerson2 {
  name: string;
  age?: number;
}

interface IKorean extends IPerson2 {
  // Iperson2에 속성 두개는 기본적으로가짐
  city: string;
}

const k: IKorean = {
  name: "김호준",
  city: "서울",
};
