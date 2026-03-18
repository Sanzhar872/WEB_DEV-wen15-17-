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
  quantity: number = 1;
  addToCart = output<{ productId: number; quantity: number }>();
 
  likeProduct() {
    this.product().likes++;
  }
  // method to emit delete event with product ID
  onDelete() {
    this.delete.emit(this.product().id);
  }

  // method to emit add to cart event with product ID and quantity
  onAddToCart() {
    this.addToCart.emit({ productId: this.product().id, quantity: this.quantity });

    this.quantity = 1;
  }

  // methods to increase quantity 
  increaseQuantity() {
    if (this.quantity < 10) {
      this.quantity++;
    }
  }
  // methods to decrease quantity
  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
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