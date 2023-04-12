import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StartComponent } from './shared/star.component';
import { ProductsDetailComponent } from './products/products-detail.component';
import { welcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './products/product-detail.guard';
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [
    AppComponent,
    welcomeComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StartComponent,
    ProductsDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products', component:ProductListComponent},
      {
        path: 'products/:id',
        canActivate:[ProductDetailGuard],
        component:ProductsDetailComponent
      },
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
