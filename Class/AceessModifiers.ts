class Person {
  public name: string = "mark";
  public age!: number;

  public constructor(age?: number) {
    if (age === undefined) {
      this.age = 20;
    } else {
      this.age = age;
    }
  }
  public async init() {}
}
