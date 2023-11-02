import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layouts/home/home.component';
import { ProductpageComponent } from './layouts/productpage/productpage.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: ProductpageComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }