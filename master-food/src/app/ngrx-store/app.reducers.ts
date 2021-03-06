import * as fromAuth from '../auth/store/auth.reducers';
import * as fromShoppingList from '../shopping-list/store/shopping-list.reducers';

import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  shoppingList: fromShoppingList.State;
  auth: fromAuth.State;
}

export const REDUCERS: ActionReducerMap<AppState> = {
  shoppingList: fromShoppingList.shoppingListReducer,
  auth: fromAuth.authReducer
}
