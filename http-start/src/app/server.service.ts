import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  URL = 'https://desire-course.firebaseio.com/data.json';

  constructor(
    private http: Http
  ) { }

  storeServers(servers: any[]) {
    return this.http.post(this.URL, servers);
  }
}
