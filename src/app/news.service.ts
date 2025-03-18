import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiKey = 'yofzltC2OZx2uDZxBmVVBCppsavFFZTASUcXd_X4HJRYzFwY'; // Замените на свой API ключ
  private apiUrl = 'https://api.currentsapi.services/v1/latest-news';

  async getNews(category: string = '', keywords: string = ''): Promise<any> {
    try {
      const response = await axios.get(this.apiUrl, {
        params: {
          apiKey: this.apiKey,
          category: category,
          keywords: keywords
        }
      });
      return response.data.news;
    } catch (error) {
      console.error('Error fetching news:', error);
      return [];
    }
  }
}