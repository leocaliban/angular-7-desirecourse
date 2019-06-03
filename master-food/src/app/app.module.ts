import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { REDUCERS } from './ngrx-store/app.reducers';
import { SharedModule } from './shared/shared.module';
import { AuthEffects } from './auth/store/auth.effects';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    AuthModule,
    SharedModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ShoppingListModule,
    EffectsModule.forRoot([AuthEffects]),
    StoreModule.forRoot(REDUCERS),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
