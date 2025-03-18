import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiKey = 'Dpj1V7TrBWt2L7I8IsUi9q0TjuRslMoAU8LpF3OEIMaiWXGR'; // Замените на свой API ключ
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
      return response.data.news.map((item: any) => ({
        ...item,
        image: item.image || null // Добавляем изображение
      }));
    } catch (error) {
      console.error('Error fetching news:', error);
      return [];
    }
  }
}