// БЫЛО: import { Component } from '@angular/common';
import { Component } from '@angular/core'; // СТАЛО
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../models/product.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, FormsModule], // Импортируем модуль для *ngFor и дочерний компонент
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  searchTerm: string = ''; 

  get filteredProducts(){
    return this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  products: Product[] = [ 
    {
      id: 1,
      name: 'Смартфон Apple iPhone 15 128Gb черный',
      description: 'Новый iPhone 15 с инновационным дизайном и мощным процессором A16 Bionic.',
      price: 365000,
      rating: 4.9,
      image: 'assets/iphone15.jpg',
      images: [
        'assets/iphone15.jpg',
        'assets/iphone15.jpg',
        'assets/iphone15.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/'
    },
    {
      id: 2,
      name: 'Смартфон Samsung Galaxy S24 Ultra 12Gb/256Gb серый',
      description: 'Флагман с поддержкой Galaxy AI и встроенным пером S Pen.',
      price: 520000,
      rating: 4.8,
      image: 'assets/samsung.jpg',
      images: [
        'assets/samsung.jpg',
        'assets/samsung.jpg',
        'assets/samsung.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-12-gb-256-gb-seryi-116043556/'
    },
    {
      id: 3,
      name: 'Наушники Apple AirPods Pro 2 с MagSafe Case (USB-C)',
      description: 'Активное шумоподавление и адаптивный звук для полного погружения.',
      price: 115000,
      rating: 5.0,
      image: 'assets/airPods.jpg',
      images: [
        'assets/airPods.jpg',
        'assets/airPods.jpg',
        'assets/airPods.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-magsafe-case-usb-c-belyi-113677582/'
    },
    {
      id: 4,
      name: 'Игровая приставка Sony PlayStation 5 Slim',
      description: 'Более компактная версия PS5 с накопителем 1 ТБ и графикой 4K.',
      price: 245000,
      rating: 4.9,
      image: 'assets/playStation.jpg',
      images: [
        'assets/playStation.jpg',
        'assets/playStation.jpg',
        'assets/playStation.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696085/'
    },
    {
      id: 5,
      name: 'Ноутбук Apple MacBook Air 13 2022 M2 8 ГБ/256 ГБ серый',
      description: 'Тонкий и мощный ноутбук на базе чипа Apple M2 с Liquid Retina дисплеем.',
      price: 460000,
      rating: 4.9,
      image: 'assets/macBook.jpg',
      images: [
        'assets/macBook.jpg',
        'assets/macBook.jpg',
        'assets/macBook.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxy3-105933794/'
    },
    {
      id: 6,
      name: 'Стайлер Dyson Airwrap Multi-styler Complete Long',
      description: 'Универсальный прибор для завивки, создания волн и разглаживания волос без перегрева.',
      price: 285000,
      rating: 4.7,
      image: 'assets/dyson.jpg',
      images: [
        'assets/dyson.jpg',
        'assets/dyson.jpg',
        'assets/dyson.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/stailer-dyson-airwrap-multi-styler-complete-long-nikel-mednyi-105151528/'
    },
    {
      id: 7,
      name: 'Смарт-браслет Xiaomi Mi Band 8 черный',
      description: 'Фитнес-трекер с ярким AMOLED экраном и поддержкой более 150 спортивных режимов.',
      price: 18000,
      rating: 4.8,
      image: 'assets/smartBand.jpg',
      images: [
        'assets/smartBand.jpg',
        'assets/smartBand.jpg',
        'assets/smartBand.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-smart-band-8-chernyi-110191141/'
    },
    {
      id: 8,
      name: 'Колонка Marshall Emberton II черный',
      description: 'Портативная колонка с фирменным звуком Marshall и защитой IP67.',
      price: 85000,
      rating: 5.0,
      image: 'assets/marshall.jpg',
      images: [
        'assets/marshall.jpg',
        'assets/marshall.jpg',
        'assets/marshall.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/marshall-emberton-ii-chernyi-latunnyi-105027582/'
    },
    {
      id: 9,
      name: 'Кофемашина DeLonghi Magnifica Start ECAM220.22.GB',
      description: 'Автоматическая кофемашина для приготовления идеального эспрессо и капучино.',
      price: 215000,
      rating: 4.9,
      image: 'assets/coffeeMachine.jpg',
      images: [
        'assets/coffeeMachine.jpg',
        'assets/coffeeMachine.jpg',
        'assets/coffeeMachine.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/delonghi-magnifica-start-ecam220-22-gb-seryi-107771765/'
    },
    {
      id: 10,
      name: 'Электросамокат Xiaomi Electric Scooter 4 Pro (2nd Gen)',
      description: 'Мощный электросамокат с запасом хода до 60 км и улучшенной системой безопасности.',
      price: 260000,
      rating: 4.6,
      image: 'assets/scooter.jpg',
      images: [
        'assets/scooter.jpg',
        'assets/scooter.jpg',
        'assets/scooter.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-electric-scooter-4-pro-2nd-gen-chernyi-119864239/'
    }
  ];
}