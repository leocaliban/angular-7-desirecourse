import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a test',
      'https://snakeoilcocktail.com/wp-content/uploads/2018/05/snake-oil-cocktail-recipe-icon-1.png'),
    new Recipe('A test recipe2', 'This is simply a test',
      'https://therecipecritic.com/wp-content/uploads/2017/07/trc-icon-main-dishes.png')
  ];
  constructor() { }

  ngOnInit() {
  }

}
