import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getCategories(): Category[] {
    return [
      { id: 1, name: 'Смартфоны' },
      { id: 2, name: 'наушники' },
      { id: 3, name: 'игровые приставки' },
      { id: 4, name: 'остальное' }
    ];
  }

  getProducts(): Product[] {
    return [
      // Категория 1: Смартфоны (Нужно 5 штук)
      { id: 1, categoryId: 1, name: 'Apple iPhone 15 128Gb', description: 'Новый iPhone 15...', price: 365000, rating: 4.9, likes: 0, image: 'assets/iphone15.jpg', images: ['assets/iphone15.jpg', 'assets/iphone15.jpg', 'assets/iphone15.jpg'], link: 'https://kaspi.kz/...' },
      { id: 2, categoryId: 1, name: 'Samsung Galaxy S24 Ultra', description: 'Флагман с поддержкой Galaxy AI...', price: 520000, rating: 4.8, likes: 0, image: 'assets/samsung.jpg', images: ['assets/samsung.jpg', 'assets/samsung.jpg', 'assets/samsung.jpg'], link: 'https://kaspi.kz/...' },
      { id: 3, categoryId: 1, name: 'Apple iPhone 17 Ultra', description: 'Новый iPhone 17...', price: 520000, rating: 4.8, likes: 0, image: 'assets/iphone17.jpg', images: ['assets/iphone17.jpg', 'assets/iphone17.jpg', 'assets/iphone17.jpg'], link: 'https://kaspi.kz/...' },
      { id: 4, categoryId: 1, name: 'Apple iPhone 16 ', description: 'Смартфон поддержкой Galaxy AI...', price: 520000, rating: 4.8, likes: 0, image: 'assets/iphone16.jpg', images: ['assets/iphone16.jpg', 'assets/iphone16.jpg', 'assets/iphone16.jpg'], link: 'https://kaspi.kz/...' },
      { id: 5, categoryId: 1, name: 'Redmi A3x3', description: 'Флагман с поддержкой Galaxy AI...', price: 520000, rating: 4.8, likes: 0, image: 'assets/redmi.jpg', images: ['assets/redmi.jpg', 'assets/redmi.jpg', 'assets/redmi.jpg'], link: 'https://kaspi.kz/...' },
      
      // Категория 2: Наушники (Нужно 5 штук)
      {id: 6, categoryId: 2, name: 'Apple AirPods Pro 2', description: 'Активное шумоподавление...', price: 115000, rating: 5.0, likes: 0, image: 'assets/airPods.jpg', images: ['assets/airPods.jpg', 'assets/airPods.jpg', 'assets/airPods.jpg'], link: 'https://kaspi.kz/...' },
      {id: 7, categoryId: 2, name: 'marshall', description: 'Премиальные беспроводные наушники с шумоподавлением...', price: 150000, rating: 4.9, likes: 0, image: 'assets/marshall.jpg', images: ['assets/marshall.jpg', 'assets/marshall.jpg', 'assets/marshall.jpg'], link: 'https://kaspi.kz/...' },
      {id: 8, categoryId: 2, name: 'marshall', description: 'Премиальные беспроводные наушники с шумоподавлением...', price: 150000, rating: 4.9, likes: 0, image: 'assets/marshall.jpg', images: ['assets/marshall.jpg', 'assets/marshall.jpg', 'assets/marshall.jpg'], link: 'https://kaspi.kz/...' },
      {id: 9, categoryId: 2, name: 'marshall', description: 'Премиальные беспроводные наушники с шумоподавлением...', price: 150000, rating: 4.9, likes: 0, image: 'assets/marshall.jpg', images: ['assets/marshall.jpg', 'assets/marshall.jpg', 'assets/marshall.jpg'], link: 'https://kaspi.kz/...' },
      {id: 10, categoryId: 2, name: 'marshall', description: 'Премиальные беспроводные наушники с шумоподавлением...', price: 150000, rating: 4.9, likes: 0, image: 'assets/marshall.jpg', images: ['assets/marshall.jpg', 'assets/marshall.jpg', 'assets/marshall.jpg'], link: 'https://kaspi.kz/...' },


      // Категория 3: Игровые приставки (Нужно 5 штук)
      { id: 11, categoryId: 3, name: 'Sony PlayStation 5 Slim', description: 'Более компактная версия PS5...', price: 245000, rating: 4.9, likes: 0, image: 'assets/playStation.jpg', images: ['assets/playStation.jpg', 'assets/playStation.jpg', 'assets/playStation.jpg'], link: 'https://kaspi.kz/...' },
      { id: 12, categoryId: 3, name: 'Nintendo Switch OLED', description: 'Современная версия Nintendo Switch с OLED экраном...', price: 185000, rating: 4.8, likes: 0, image: 'assets/nintendo.jpg', images: ['assets/nintendo.jpg', 'assets/nintendo.jpg', 'assets/nintendo.jpg'], link: 'https://kaspi.kz/...' },
      { id: 13, categoryId: 3, name: 'Xbox Series X', description: 'Платформа Xbox с высокой производительностью...', price: 275000, rating: 4.7, likes: 0, image: 'assets/xbox.jpg', images: ['assets/xbox.jpg', 'assets/xbox.jpg', 'assets/xbox.jpg'], link: 'https://kaspi.kz/...' },
      { id: 14, categoryId: 3, name: 'Xbox Series X', description: 'Платформа Xbox с высокой производительностью...', price: 275000, rating: 4.7, likes: 0, image: 'assets/xbox.jpg', images: ['assets/xbox.jpg', 'assets/xbox.jpg', 'assets/xbox.jpg'], link: 'https://kaspi.kz/...' },
      { id: 15, categoryId: 3, name: 'Xbox Series X', description: 'Платформа Xbox с высокой производительностью...', price: 275000, rating: 4.7, likes: 0, image: 'assets/xbox.jpg', images: ['assets/xbox.jpg', 'assets/xbox.jpg', 'assets/xbox.jpg'], link: 'https://kaspi.kz/...' },
      
      // остальное
      {id: 16, categoryId: 4, name: 'Стайлер Dyson Airwrap Multi-styler Complete Long', description: 'Универсальный прибор для завивки, создания волн и разглаживания волос без перегрева.', price: 285000, rating: 4.7, likes: 0, image: 'assets/dyson.jpg', images: ['assets/dyson.jpg', 'assets/dyson.jpg', 'assets/dyson.jpg'], link: 'https://kaspi.kz/...'},
      {id: 17, categoryId: 4, name: 'coffee machine', description: 'Мощная кофемашина.', price: 350000, rating: 4.8, likes: 0, image: 'assets/coffeeMachine.jpg', images: ['assets/coffeeMachine.jpg', 'assets/coffeeMachine.jpg', 'assets/coffeeMachine.jpg'], link: 'https://kaspi.kz/...' },
      {id: 18, categoryId: 4, name: 'Scooter', description: 'Мощный скутер.', price: 150000, rating: 4.6, likes: 0, image: 'assets/scooter.jpg', images: ['assets/scooter.jpg', 'assets/scooter.jpg', 'assets/scooter.jpg'], link: 'https://kaspi.kz/...' },
      {id: 19, categoryId: 4, name: 'Smart Watch', description: 'Умные часы с множеством функций.', price: 90000, rating: 4.5, likes: 0, image: 'assets/smartWatch.jpg', images: ['assets/smartWatch.jpg', 'assets/smartWatch.jpg', 'assets/smartWatch.jpg'], link: 'https://kaspi.kz/...' },
      {id: 20, categoryId: 4, name: 'Робот пылесос', description: 'пылесос.', price: 120000, rating: 4.7, likes: 0, image: 'assets/vacuum.jpg', images: ['assets/vacuum.jpg', 'assets/vacuum.jpg', 'assets/vacuum.jpg'], link: 'https://kaspi.kz/...' }
    ];
  }
}