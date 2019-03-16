import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a test',
      'https://snakeoilcocktail.com/wp-content/uploads/2018/05/snake-oil-cocktail-recipe-icon-1.png'),
    new Recipe('A test recipe2', 'This is simply a test',
      'https://therecipecritic.com/wp-content/uploads/2017/07/trc-icon-main-dishes.png')
  ];

  constructor() { }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
