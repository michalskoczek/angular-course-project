// tworzę model Recipe w czystym TS
export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  // podając argumenty w constructor będę musiał później podawać te 3 dane przy tworzeniu instancji tej klasy i będą przypisane do swoich zmiennych, które podałem wyżej
  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
