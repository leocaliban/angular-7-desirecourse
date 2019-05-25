import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  loadedFeature = 'recipe';

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyCW4JYP_2bKjnERM2W7JxodbJuZqUQ3TpY',
      authDomain: 'ng-master-food.firebaseapp.com',
      databaseURL: 'https://ng-master-food.firebaseio.com',
      projectId: 'ng-master-food',
      storageBucket: 'ng-master-food.appspot.com'
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
