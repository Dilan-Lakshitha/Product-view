import { Component, OnDestroy, OnInit } from "@angular/core";
import { Iproduct } from "./product";
import { ProductService } from "./product.service";
import { Subscription } from "rxjs";

@Component({
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy{
    PageTitle: string = 'Product List';
    imageWidth: number=50;
    imageMargin: number=2;
    showImage: boolean=false;
    private _listFilter: string=' ';
    errorMessage ='';
    sub! :Subscription;

    set listFilter(value:string){
        this._listFilter=value;
        this.filteredProducts = this.performFilter(value);
    }
    get listFilter():string{
        return this._listFilter;
    }


    filteredProducts: Iproduct[]=[];
    products : Iproduct[] =[];
    
    constructor(private productService:ProductService){}
    toggleImage():void{
        this.showImage=!this.showImage;
    }


    ngOnInit(): void {
        this.sub=this.productService.getProducts().subscribe({
            next:products=>{
                this.products=products;
                this.filteredProducts=this.products;
            },
            error: err =>this.errorMessage = err
        });
    }

    ngOnDestroy(): void {
       this.sub.unsubscribe();
    }

    performFilter(filterBy:string):Iproduct[]{
        filterBy=filterBy.toLocaleLowerCase();
        return this.products.filter((product:Iproduct)=>
        product.productName.toLocaleLowerCase().includes(filterBy));
    }
    onRatingClicked(massage:string): void{
        this.PageTitle='Product List: '+ massage;
    }
}
