import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeModule } from './layouts/home/home.module';
import { AppHeaderModule } from './shared/header/header.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, 
    HomeModule,
    AppHeaderModule,   
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
