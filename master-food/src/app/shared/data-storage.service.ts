
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    const userToken = this.authService.getToken();
    return this.http.put(`${this.URL}recipes.json?auth=${userToken}`, this.recipeService.getRecipes());
  }

  getRecipes() {
    const userToken = this.authService.getToken();
    return this.http.get<Recipe[]>(`${this.URL}recipes.json?auth=${userToken}`)
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
