import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Pizza', 'Very tasty', 'http://data.whicdn.com/images/165749314/large.png', [
      new Ingredient('Cheese', 3),
      new Ingredient('Tomato', 2)
    ]),
    new Recipe('Raspberry', 'Sweet', 'http://freepngimages.com/wp-content/uploads/2015/10/raspberries-transparent-background-image.png', [])
  ];

  constructor() {}

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }
}
