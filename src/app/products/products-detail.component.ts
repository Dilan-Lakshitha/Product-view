import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from './product';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {
  PageTitle ='Product Details';
  product:Iproduct|undefined;

  constructor(private route:ActivatedRoute,private router:Router){}


    ngOnInit(): void {
      const id=Number(this.route.snapshot.paramMap.get('id'));
      this.PageTitle +=`:${id}`;
      this.product={
      "productId": id,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2021",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "assets/images/leaf_rake.png"
      }
    }
    onBack():void{
      this.router.navigate(['/products']);
    }
}
