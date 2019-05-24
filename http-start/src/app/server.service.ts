import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';

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
    return this.http.put(this.URL, servers, { headers: headers });
  }

  getServers() {
    return this.http.get(this.URL)
      .map((response: Response) => {
        const data = response.json();
        for (const server of data) {
          server.name = 'FETCHED_' + server.name;
        }
        return data;
      });
  }
}
