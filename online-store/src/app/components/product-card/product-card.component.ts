import { Component, input, output } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({ 
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  product = input.required<Product>();
  delete = output<number>();

  likeProduct() {
    // В реальном приложении мы бы вызывали API, здесь просто меняем свойство объекта
    this.product().likes++;
  }

  onDelete() {
    this.delete.emit(this.product().id);
  }

  share(platform: 'whatsapp' | 'telegram') {
    const url = encodeURIComponent(this.product().link);
    if (platform === 'whatsapp') {
      window.open(`https://api.whatsapp.com/send?text=${url}`, '_blank');
    } else {
      window.open(`https://t.me/share/url?url=${url}`, '_blank');
    }
  }
}