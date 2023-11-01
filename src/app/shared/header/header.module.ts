import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component'; // Đảm bảo import đúng component

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule],
  exports: [HeaderComponent],
})
export class AppHeaderModule { }
