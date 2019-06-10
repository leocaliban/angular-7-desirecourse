import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { Recipe } from '../recipe.model';
import * as fromRecipe from '../ngrx-store/recipe.reducers';
import * as RecipeActions from '../ngrx-store/recipe.actions';

import { Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';

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

  @Effect({ dispatch: false })
  recipeStore = this.actions$
    .pipe(
      ofType(RecipeActions.STORE_RECIPES),
      withLatestFrom(this.store.select('recipes')),
      switchMap(([action, state]) => {
        const userToken = null;
        return this.http.put(`${this.URL}recipes.json`,
          state.recipes,
          {
            observe: 'body',
            params: new HttpParams().set('auth', userToken)
          }
        );
      }),
    );




  constructor(
    private http: HttpClient,
    private actions$: Actions,
    private store: Store<fromRecipe.FeatureState>
  ) { }
}
