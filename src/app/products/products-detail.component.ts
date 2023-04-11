import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent {
  PageTitle: string ='Product Details'
  constructor(private route:ActivatedRoute){}


    ngOnInit(): void {
      const id=Number(this.route.snapshot.paramMap.get('id'));
      this.PageTitle +=`:${id}`;
    }
}
