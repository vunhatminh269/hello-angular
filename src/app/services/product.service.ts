//product.service.ts
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Sản phẩm 1',
      description: 'Mô tả sản phẩm 1',
      price: 100,
      imageUrl: '/assets/images/product1.jpg',
      discountedPrice: 80,
      image: null
    },
    {
      id: 2,
      name: 'Sản phẩm 2',
      description: 'Mô tả sản phẩm 2',
      price: 150,
      imageUrl: 'link_anh_2.jpg',
      discountedPrice: 120,
      image: null
    },
    {
      id: 3,
      name: 'Sản phẩm 2',
      description: 'Mô tả sản phẩm 2',
      price: 150,
      imageUrl: 'link_anh_2.jpg',
      discountedPrice: 120,
      image: null
    },{
      id: 4,
      name: 'Sản phẩm 2',
      description: 'Mô tả sản phẩm 2',
      price: 150,
      imageUrl: 'link_anh_2.jpg',
      discountedPrice: 120,
      image: null
    },{
      id: 5,
      name: 'Sản phẩm 2',
      description: 'Mô tả sản phẩm 2',
      price: 150,
      imageUrl: 'link_anh_2.jpg',
      discountedPrice: 120,
      image: null
    },{
      id: 6,
      name: 'Sản phẩm 2',
      description: 'Mô tả sản phẩm 2',
      price: 150,
      imageUrl: 'link_anh_2.jpg',
      discountedPrice: 120,
      image: null
    },
  ];
  getNewProducts(): import("../models/product.model").Product[] {
    throw new Error('Method not implemented.');
  }
  getProduct(productId: number): Product | undefined {
    return this.products.find(product => product.id === productId);
  }

  constructor() {
}
}
