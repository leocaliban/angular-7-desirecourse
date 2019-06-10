import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Effect, Actions, ofType } from '@ngrx/effects';

import * as RecipeActions from '../ngrx-store/recipe.actions';

import { from } from 'rxjs';
import { map, switchMap, mergeMap, tap } from 'rxjs/operators';
import { Recipe } from '../recipe.model';

@Injectable()
export class RecipeEffects {

  URL = 'https://ng-master-food.firebaseio.com/';

  @Effect()
  recipeFetch = this.actions$
    .pipe(
      ofType(RecipeActions.FETCH_RECIPES),
      switchMap((action: RecipeActions.FetchRecipes) => {
        return this.http.get<Recipe[]>(`${this.URL}recipes.json`,
          {
            observe: 'body',
            responseType: 'json'
          })
      }),

      map((recipes) => {
        for (const recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return {
          type: RecipeActions.SET_RECIPES,
          payload: recipes
        };
      })
    );
  constructor(
    private http: HttpClient,
    private actions$: Actions,
  ) { }
}
