import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  URL = 'https://ng-master-food.firebaseio.com/';

  constructor(
    private http: Http,
    private recipeService: RecipeService
  ) { }

  storeRecipes() {
    return this.http.put(`${this.URL}recipes.json`, this.recipeService.getRecipes());
  }
}
