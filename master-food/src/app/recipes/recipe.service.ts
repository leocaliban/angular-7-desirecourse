import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Big Burger', 'A super big burger - just awesome!',
      'https://www.recipetineats.com/wp-content/uploads/2016/02/Beef-Hamburgers_7-2-500x500.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Fries', 4),
        new Ingredient('Bread', 1),
        new Ingredient('Cheese', 4),
        new Ingredient('Tomatoes', 1),
        new Ingredient('Onion', 4),
      ]),
    new Recipe(
      'Pepperoni Pizza', 'What else you need to say?',
      'https://www.casinopauma.com/wp-content/uploads/2016/11/pepperoni-pizza.png',
      [
        new Ingredient('Pepperoni', 3),
        new Ingredient('Cheese', 5),
        new Ingredient('Tomato sauce', 1),
        new Ingredient('Pizza dough', 1)
      ]),
    new Recipe(
      'Feijoada', 'Welcome to Brazil',
      'http://millarestaurante.com.br/wp-content/uploads/2017/10/Milla-Restaurante-e-Pizzaria-Feijoada-Grande.jpg',
      [
        new Ingredient('Black beans', 1),
        new Ingredient('Pork', 1),
        new Ingredient('Sausage', 2),
        new Ingredient('Onions', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  constructor(
    private shoppingListService: ShoppingListService
  ) { }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
