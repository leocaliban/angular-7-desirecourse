import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { AuthService } from '../../auth/auth.service';
import { DataStorageService } from '../../shared/data-storage.service';
import * as fromApp from '../../ngrx-store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  authState: Observable<fromAuth.State>;

  constructor(
    public authService: AuthService,
    private dataStorageService: DataStorageService,
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.authState = this.store.select('auth');
  }

  onSaveData() {
    this.dataStorageService.storeRecipes().subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }
}
