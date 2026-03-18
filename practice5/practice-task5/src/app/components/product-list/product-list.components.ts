import { Component, input, output } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = input.required<Product[]>();
  productDeleted = output<number>();

  onDelete(productId: number) {
    // Передаем ID наверх родителю, чтобы отфильтровать главный массив
    this.productDeleted.emit(productId);
  }
}