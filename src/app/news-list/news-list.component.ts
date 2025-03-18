import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule
  ],
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