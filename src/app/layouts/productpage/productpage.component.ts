import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductComponent implements OnInit {
  product!: Product;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.product = this.productService.getProduct(); // Sử dụng phương thức từ service
  }
}
