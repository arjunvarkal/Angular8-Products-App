import { Component,OnInit } from '@angular/core' ;
import {IProduct} from './product.model' ;
import { ProductService } from './product.service' ;


@Component({
    selector : 'app-prod',
    templateUrl : './product.component.html',
    styleUrls : ['./product.component.css']
})
export class ProductComponent implements OnInit{
    title : string = 'Product App' ;
    desc : string = 'This is about products' ;
    imageWidth : number = 50 ;
    showImage :boolean =true ;
    showTable:boolean =true ;
    userText:string = "" ;
    constructor(private productService : ProductService){
    }
    products : IProduct[] ;
    toggleImage(){
        this.showImage = !this.showImage ;
    }
    dataReceive(message){
        this.title = 'Product Pages >>>> '+message ;
    }
    ngOnInit(){
        this.productService.getProducts()
        .subscribe((data)=>this.products=data) ;
    }
}