import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router' ;
import { IProduct } from './product.model';
import { ProductService } from './product.service' ;

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {

    id : number ;
    details : IProduct[] ;

  constructor(private route : ActivatedRoute,private productService : ProductService
    ,private router:Router) { }

        ngOnInit() {
            this.id = this.route.snapshot.params['id'] ;
            this.productService.getProductDetails(this.id)
            .subscribe((data)=>this.details=data);
        }
        onBack(){
            this.router.navigate(['/products']) ;
        }


    


}





/*
.subscribe((data)=>{
    this.name = data['name'] ;
    this.image = data['img'] ;
    this.description = data['details'];

    */