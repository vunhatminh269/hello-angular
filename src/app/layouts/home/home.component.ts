import { AfterViewInit, Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  items: any[] = [
    { name: 'Item 1', image: '/src/assets/images/owlitem1.webp', link: '/products' },
    { name: 'Item 2', image: '/src/assets/images/owlitem2.webp', link: '/products' },
    { name: 'Item 3', image: '/src/assets/images/owlitem3.webp', link: '/products' },
    { name: 'Item 4', image: '/src/assets/images/owlitem4.webp', link: '/products' },
  ];
  slickCarouselConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  products: Product[] = [
  ];

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  newProducts: Product[] = [];

  constructor(private productService: ProductService) {}
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
    this.newProducts = this.productService.getNewProducts();
}
}