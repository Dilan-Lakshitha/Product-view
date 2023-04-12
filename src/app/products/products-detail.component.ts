import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iproduct } from './product';
import { ProductService } from './product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {
  PageTitle ='Product Details';
  errorMessage = '';
  product:Iproduct|undefined;

  constructor(private route:ActivatedRoute,private router:Router,private productService:ProductService){}


    ngOnInit(): void {
      const id=Number(this.route.snapshot.paramMap.get('id'));
      this.getProduct(id);
      }
      
      getProduct(id:number):void{
        this.productService.getProduct(id).subscribe({
            next:product=>this.product=product,
            error:err=>this.errorMessage=err
        });
      }

    onBack():void{
      this.router.navigate(['/products']);
    }
}
