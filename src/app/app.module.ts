import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { InputCommentComponent } from './input-comment/input-comment.component';
import { FeedCommentComponent } from './feed-comment/feed-comment.component';
import { environment } from '../environments/environment';

import { AngularFirestoreModule } from '@angular/fire/firestore';

import { DataService } from './data.service';
@NgModule({
  declarations: [
    AppComponent,
    InputCommentComponent,
    FeedCommentComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    FormsModule,
    AngularFirestoreModule,
    MatCardModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
