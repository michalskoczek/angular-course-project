// export class Ingredient {
//   public name: string;
//   public amount: number;

//   constructor(name: string, amount: number) {
//     this.name = name;
//     this.amount - amount;
//   }
// }

// Zamiast powyższego zapisu można zastosować skrócony taki jak poniżej:
export class Ingredient {
  constructor(public name: string, public amount: number) {}
}
