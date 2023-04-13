import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { welcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './products/product-detail.guard';
import { ProductModule } from './products/product.module';
import { ProductService } from './products/product.service';

@NgModule({
  declarations: [
    AppComponent,
    welcomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([    
      {path: 'welcome',component:welcomeComponent},
      {path: '',redirectTo: 'welcome',pathMatch:'full'},
      {path: '**',redirectTo: 'welcome',pathMatch: 'full'}
    ]),
    ProductModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
