import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

import { AuthService } from '../auth/auth.service';

import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Requisição interceptada: ', req);
    // const copiedRequest = req.clone({headers: req.headers.append('','')});
    const copiedRequest = req.clone({ params: req.params.set('auth', this.authService.getToken()) });
    return next.handle(copiedRequest);
  }

}
