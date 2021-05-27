import { Component, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  // TS już będzie wiedział, że tablica recipes będzie składać się z modelów Recipe, które będą obiektami podanymi w tablicy
  recipes: Recipe[] = [
    // tworzę nowy Recipe zgodnie z modelem
    new Recipe(
      'A test recipe',
      'This is simply a test',
      'https://cdn.pixabay.com/photo/2020/01/29/17/44/arugula-4803139_960_720.jpg'
    ),
    new Recipe(
      'A second test recipe',
      'This is simply a second test',
      'https://cdn.pixabay.com/photo/2020/01/29/17/44/arugula-4803139_960_720.jpg'
    ),
    new Recipe(
      'A third test recipe',
      'This is simply a third test',
      'https://cdn.pixabay.com/photo/2020/01/29/17/44/arugula-4803139_960_720.jpg'
    ),
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
