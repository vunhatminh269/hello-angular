import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getNewProducts(): import("../models/product.model").Product[] {
    throw new Error('Method not implemented.');
  }
  getProduct(): import("../models/product.model").Product {
    throw new Error('Method not implemented.');
  }

  constructor() {
}
}
