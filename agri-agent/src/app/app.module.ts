import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9YY648_7EJrQSxpm5k82De0Tcam_Y_lA",
  authDomain: "agri-agent-v1.firebaseapp.com",
  databaseURL: "https://agri-agent-v1-default-rtdb.firebaseio.com",
  projectId: "agri-agent-v1",
  storageBucket: "agri-agent-v1.appspot.com",
  messagingSenderId: "45871373131",
  appId: "1:45871373131:web:c1b51794fa539baedca6ce",
  measurementId: "G-Y86EKQC75V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
