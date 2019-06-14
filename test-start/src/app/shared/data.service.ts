import { Injectable } from '@angular/core';
import { resolve } from 'q';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor() { }

  getDetails() {
    const recultPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data');
      }, 1500);
    });
    return recultPromise;
  }
}
