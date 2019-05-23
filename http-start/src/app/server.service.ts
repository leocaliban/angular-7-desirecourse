import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { headersToString } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  URL = 'https://desire-course.firebaseio.com/data.json';

  constructor(
    private http: Http
  ) { }

  storeServers(servers: any[]) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.URL, servers, { headers: headers });
  }

  getServers() {
    return this.http.get(this.URL);
  }
}
