// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'hello-angular';
// }
import { AfterViewInit, Component } from '@angular/core';
declare var $: any;
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
export class AppComponent implements AfterViewInit {
  items: any[] = [
    { name: 'Item 1', image: '/src/assets/images/owlitem1.webp', link: '/products' },
    { name: 'Item 2', image: '/src/assets/images/owlitem2.webp', link: '/products' },
    { name: 'Item 3', image: '/src/assets/images/owlitem3.webp', link: '/products' },
    { name: 'Item 4', image: '/src/assets/images/owlitem4.webp', link: '/products' },
  ];

  ngAfterViewInit() {
    $(document).ready(function () {
      $('#owl-home .owl-carousel').owlCarousel({
        items: 4,
        loop: true,
        margin: 5,
        nav: true,
        dots: false
      });
    });
  }
}