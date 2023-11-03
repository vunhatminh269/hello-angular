import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {
  

  constructor(private productService: ProductService) {}
  product!: Product;
  ngOnInit() { 
    const productId = 1;
    this.product = this.productService.getProduct(productId)!; // Sử dụng phương thức từ service
  }
}
