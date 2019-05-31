import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

import { AuthService } from '../auth/auth.service';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


export class LoggingInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        tap(
          event => {
            console.log('Resposta interceptada: ', event);
          }
        ));
  }

}
