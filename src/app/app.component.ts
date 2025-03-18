import { Component } from '@angular/core';
import { NewsListComponent } from './news-list/news-list.component'; // Добавьте эту строку

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NewsListComponent], // Добавьте NewsListComponent в imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'latest-news';
}