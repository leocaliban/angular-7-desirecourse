import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { REDUCERS } from './ngrx-store/app.reducers';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    AuthModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ShoppingListModule,
    StoreModule.forRoot(REDUCERS),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
