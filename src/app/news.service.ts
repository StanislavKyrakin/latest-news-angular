import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiKey = 'VE2-KBT9G_8GH8VEGcNP6yYGnBAmowo_UAb2yexHx9cx5GQj'; // Замените на свой API ключ
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