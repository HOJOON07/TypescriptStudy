// function
//alias
type EatType = (food: string) => void;

//interface
interface IEat {
  (food: string): void;
}
// array
type personList = string[];

interface IPersonList {
  [index: number]: string;
}

// intersection
interface ErrorHandling {
  succes: boolean;
  error: { message: string };
}

interface ArtistData {
  artists: { name: string }[];
}

type ArtistResponseType = ArtistData & ErrorHandling;

interface IArtistResponse extends ArtistData, ErrorHandling {}

let art: ArtistResponseType;
let iar: IArtistResponse;

//union

interface Bird {
  fly(): void;
  layEggs(): void;
}
interface Fish {
  swim(): void;
  layEggs(): void;
}

type PetType = Bird | Fish;

interface Ipet extends PetType {} //유니온 타입은 인터페이스한테 상속할 수 없음.

class pet implements PetType {} //클래스한테 넣어줄 수 없음.

//declaration merging - interfacee
//알리아스는 할수 없는 행위

interface merging {
  a: string;
}
interface merging {
  b: string;
}
// 이름이 같은 인터페이스를 사용하면 나중에 사용할 때 알아서 합쳐짐
// 알리아스는 이름이 겹친다고 에러가 발생함!
let mi: merging;

// 기본적으로 알리아스는 어떤 타입을 부르는 이름을 만들어내는 것이고
// 인터페이스는 어떤 타입자체를 만들어낸다고 볼 수 있다.
