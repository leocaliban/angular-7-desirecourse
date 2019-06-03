import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromApp from '../ngrx-store/app.reducers';
import * as fromAuth from '../auth/store/auth.reducers';
import { switchMap, take } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private store: Store<fromApp.AppState>) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Requisição interceptada: ', req);
    // const copiedRequest = req.clone({headers: req.headers.append('','')});

    return this.store.select('auth')
      .pipe(
        take(1),
        switchMap((authState: fromAuth.State) => {
          const copiedRequest = req.clone({ params: req.params.set('auth', authState.token) });
          return next.handle(copiedRequest);
        })
      );
  }

}
