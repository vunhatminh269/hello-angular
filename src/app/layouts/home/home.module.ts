import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppHeaderModule } from 'src/app/shared/header/header.module';
import { HomeComponent } from './home.component';
@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule,AppHeaderModule],
  exports: [HomeComponent],
})
export class HomeModule { }