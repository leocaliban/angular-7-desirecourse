import { NgForm } from '@angular/forms';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { Ingredient } from 'src/app/shared/ingredient.model';

import { Subscription } from 'rxjs';

import { Store } from '@ngrx/store';

import * as fromApp from '../../ngrx-store/app.reducers';
import * as ShoppingListActions from '../store/shopping-list.actions';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('form') shoppingListForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItem: Ingredient;

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit() {
    this.subscription = this.store.select('shoppingList')
      .subscribe(
        data => {
          if (data.editedIngredientIndex > -1) {
            this.editedItem = data.editedIngredient;
            this.editMode = true;
            this.shoppingListForm.setValue({
              name: this.editedItem.name,
              amount: this.editedItem.amount
            });
          } else {
            this.editMode = false;
          }
        }
      );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.store.dispatch(new ShoppingListActions.UpdateIngredient({
        ingredient: newIngredient
      }));
    } else {
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
    }
    this.editMode = false;
    form.reset();
  }

  onDelete() {
    this.store.dispatch(new ShoppingListActions.DeleteIngredient());
    this.onClear();
  }

  onClear() {
    this.shoppingListForm.reset();
    this.editMode = false;
  }

  ngOnDestroy(): void {
    this.store.dispatch(new ShoppingListActions.StopEdit());
    this.subscription.unsubscribe();
  }
}
