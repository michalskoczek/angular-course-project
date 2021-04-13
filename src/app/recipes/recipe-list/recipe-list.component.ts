import { Component } from '@angular/core';

import { Recipe } from '../recipe.module';

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
      'A test recipe',
      'This is simply a test',
      'https://cdn.pixabay.com/photo/2020/01/29/17/44/arugula-4803139_960_720.jpg'
    ),
    new Recipe(
      'A test recipe',
      'This is simply a test',
      'https://cdn.pixabay.com/photo/2020/01/29/17/44/arugula-4803139_960_720.jpg'
    ),
  ];
}
