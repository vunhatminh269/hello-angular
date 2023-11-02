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
    { name: 'Item 1', image: '/assets/images/owlitem1.webp', link: '/products' },
    { name: 'Item 2', image: '/assets/images/owlitem2.webp', link: '/products' },
    { name: 'Item 3', image: '/assets/images/owlitem3.webp', link: '/products' },
    { name: 'Item 4', image: '/assets/images/owlitem4.webp', link: '/products' },
  ];
  slickCarouselConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    arrows: true,
    vertical: false,
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
    {
      id: 1,
      name: 'Sản phẩm 1',
      description: 'Mô tả sản phẩm 1',
      price: 100,
      imageUrl: 'link_anh_1.jpg',
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

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    vertical: false,
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