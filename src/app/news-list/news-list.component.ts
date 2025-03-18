import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { CommonModule } from '@angular/common'; // Добавьте эту строку
import { FormsModule } from '@angular/forms'; // Добавьте эту строку

@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [CommonModule, FormsModule], // Объединенный массив imports
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  news: any[] = [];
  categories = ['business', 'entertainment', 'health', 'science', 'sports', 'technology'];
  selectedCategory = '';
  searchKeywords = '';

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.loadNews();
  }

  async loadNews(): Promise<void> {
    this.news = await this.newsService.getNews(this.selectedCategory, this.searchKeywords);
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.loadNews();
  }

  search(): void {
    this.loadNews();
  }
}