import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProduct(): import("../models/product.model").Product {
    throw new Error('Method not implemented.');
  }

  constructor() {
}
}
