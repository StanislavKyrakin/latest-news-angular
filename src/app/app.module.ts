import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewsListComponent } from './news-list/news-list.component';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppComponent,
    NewsListComponent,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule
  ],

  providers: [],
  bootstrap: [] // Удаляем AppComponent из bootstrap
})
export class AppModule { }