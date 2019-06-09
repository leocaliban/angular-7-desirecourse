
import { Action } from '@ngrx/store';

import { Recipe } from '../recipe.model';

export const SET_RECIPES = 'SET_RECIPES';
export const ADD_RECIPE = 'ADD_RECIPE';
export const UPDATE_RECIPE = 'UPDATE_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE';
export const START_EDIT = 'START_EDIT';
export const STOP_EDIT = 'STOP_EDIT';

export class SetRecipes implements Action {

  readonly type: string = SET_RECIPES;

  constructor(public payload: Recipe[]) { }
}

export class AddRecipe implements Action {

  readonly type: string = ADD_RECIPE;

  constructor(public payload: Recipe[]) { }
}
export class UpdateRecipe implements Action {

  readonly type: string = UPDATE_RECIPE;

  constructor(public payload: {
    index: number,
    updatedRecipe: Recipe
  }) { }
}

export class DeleteRecipe implements Action {

  readonly type: string = DELETE_RECIPE;

  constructor(public payload: number) { }
}

export class StartEdit implements Action {

  readonly type: string = START_EDIT;

  constructor(public payload: number) { }
}

export class StopEdit implements Action {
  readonly type: string = STOP_EDIT;
  constructor(public payload?: any) { }
}

export type RecipeActions = SetRecipes | AddRecipe | UpdateRecipe | DeleteRecipe;
