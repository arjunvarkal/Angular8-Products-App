import { NgModule } from '@angular/core' ;
import { ProductComponent } from './product.component' ;
import { ProductDetailsComponent } from './product-details.component' ;


import { MyUpperCasePipe } from './myupper.pipe' ;
import { MyDiscountPipe } from './discount.pipe' ;
import { MySearchPipe } from './search.pipe';
import { RouterModule } from '@angular/router';
import { ProductService } from './product.service' ;
import { SharedModule } from '../shared/shared.module' ;
import { AppRoutingModule } from '../app-routing.module' ;
import { ChangeColorDirective } from './colorDirective.directive';



@NgModule({
    imports:[
        SharedModule,
        AppRoutingModule
        
        
    ],
    declarations:[
        MyUpperCasePipe,
        MyDiscountPipe,
        MySearchPipe,
        ProductComponent,
        ProductDetailsComponent,
        ChangeColorDirective

    ],
    providers:[
        ProductService
    ]
})

export class ProductModule{

}