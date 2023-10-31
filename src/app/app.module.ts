import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppHeaderModule } from './app-header.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    
    AppComponent, 
  ],
  imports: [
    BrowserModule,
    AppHeaderModule, 
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
