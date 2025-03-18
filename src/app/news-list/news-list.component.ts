import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  news: any[] = [];
  categories = ['business', 'entertainment', 'health', 'science', 'sports', 'technology'];
  selectedCategory = '';
  searchKeywords = '';
  pageSize = 10;
  pageIndex = 0;
  length = 0;
  loading = false;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.loadNews();
  }

  async loadNews(): Promise<void> {
    this.loading = true;
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.news = (await this.newsService.getNews(this.selectedCategory, this.searchKeywords)).slice(startIndex, endIndex);
    this.length = (await this.newsService.getNews(this.selectedCategory, this.searchKeywords)).length;
    this.loading = false;
  }

  handlePageEvent(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.loadNews();
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.loadNews();
  }

  search(): void {
    this.loadNews();
  }
}