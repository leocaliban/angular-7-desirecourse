import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';

import * as RecipeActions from './recipe.actions';
import { Actions } from '@ngrx/effects';

export interface FeatureState {
  recipes: State;
}

export interface State {
  recipes: Recipe[];
}

const initialState: State = {
  recipes: [
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
      'http://www.hammockpizza.co/image/cache/pizza/pepperoni%20pizza-800x800.png',
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
  ]
};


export function recipeReducer(state = initialState, action: RecipeActions.RecipeActions) {

  switch (action.type) {
    case RecipeActions.SET_RECIPES:
      return {
        ...state,
        recipes: [...action.payload]
      };
    case RecipeActions.ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      };

    case RecipeActions.UPDATE_RECIPE:
      const recipe = state.recipes[action.payload.index];
      const updatedRecipe = {
        ...recipe,
        ...action.payload.updatedRecipe
      };
      const recipes = [...state.recipes];
      recipes[action.payload.index] = updatedRecipe;

      return {
        ...state,
        recipes: recipes
      };
    case RecipeActions.DELETE_RECIPE:
      const oldRecipes = [...state.recipes];
      oldRecipes.splice(action.payload, 1);
      return {
        ...state,
        recipes: oldRecipes
      };
    default:
      return state;
  }
}
