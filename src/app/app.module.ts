import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewsListComponent } from './news-list/news-list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppComponent, // Импортируем standalone AppComponent
    NewsListComponent // Импортируем standalone NewsListComponent
  ],
  providers: [],
  bootstrap: [] // Удаляем AppComponent из bootstrap
})
export class AppModule { }