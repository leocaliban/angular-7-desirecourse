import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  URL = 'https://ng-master-food.firebaseio.com/';

  constructor(
    private http: Http,
    private recipeService: RecipeService,
    private authService: AuthService
  ) { }

  storeRecipes() {
    const userToken = this.authService.getToken();
    return this.http.put(`${this.URL}recipes.json?auth=${userToken}`, this.recipeService.getRecipes());
  }

  getRecipes() {
    const userToken = this.authService.getToken();
    return this.http.get(`${this.URL}recipes.json?auth=${userToken}`)
      .pipe(
        map((response: Response) => {
          const recipes: Recipe[] = response.json();
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
