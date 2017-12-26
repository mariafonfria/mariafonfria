import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit () {
    firebase.initializeApp({
      apiKey: 'AIzaSyCNp2_XZs9TtOa_bA8tOwEp-BPPHfr3AxA',
    authDomain: 'manolita-46ffd.firebaseapp.com',
    databaseURL: 'https://manolita-46ffd.firebaseio.com',
    projectId: 'manolita-46ffd'
    });
  }
}
