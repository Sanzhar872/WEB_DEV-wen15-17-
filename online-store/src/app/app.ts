import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.services';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { ProductListComponent } from './components/product-list/product-list.components';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {
  categories: Category[] = [];
  allProducts: Product[] = [];
  selectedCategory: Category | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.categories = this.productService.getCategories();
    this.allProducts = this.productService.getProducts();
  }

  selectCategory(category: Category) {
    this.selectedCategory = category;
  }

  // Геттер динамически фильтрует товары на основе выбранной категории
  get displayedProducts(): Product[] {
    if (!this.selectedCategory) return [];
    return this.allProducts.filter(p => p.categoryId === this.selectedCategory!.id);
  }

  handleProductDelete(productId: number) {
    // Удаляем товар из главного списка
    this.allProducts = this.allProducts.filter(p => p.id !== productId);
  }
}