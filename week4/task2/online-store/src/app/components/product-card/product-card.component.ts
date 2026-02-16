import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() product!: Product; // Принимаем данные от родителя
  currentImgIndex: number = 0;

  share(platform: 'wa' | 'tg') {
    const url = platform === 'wa' 
      ? `https://wa.me/?text=${encodeURIComponent('Look! ' + this.product.link)}`
      : `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank');
  }

  changeImage(index: number) {
    this.currentImgIndex = index;
  }
}
