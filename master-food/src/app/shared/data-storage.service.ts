
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';
import { RecipeService } from '../recipes/recipe.service';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  URL = 'https://ng-master-food.firebaseio.com/';

  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) { }

  storeRecipes() {

    const userToken = null;
    // const req = new HttpRequest('PUT', `${this.URL}recipes.json`,
    //    this.recipeService.getRecipes(), {
    //    reportProgress:true, params: new HttpParams().set('auth', userToken)
    // });
    // return this.http.request(req);
    return this.http.put(`${this.URL}recipes.json`,
      this.recipeService.getRecipes(),
      {
        observe: 'body',
        params: new HttpParams().set('auth', userToken)
      });
  }

  getRecipes() {
    return this.http.get<Recipe[]>(`${this.URL}recipes.json`,
      {
        observe: 'body',
        responseType: 'json'
      })
      .pipe(
        map((recipes) => {
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }))
      .subscribe((recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      });
  }
}
