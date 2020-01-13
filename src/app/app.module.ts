import { NgModule } from '@angular/core' ;
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser' ;
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './products/product.component' ;
import { FormsModule } from '@angular/forms' ;
import { MyUpperCasePipe } from './products/myupper.pipe' ;
import { MyDiscountPipe } from './products/discount.pipe' ;
import { MySearchPipe } from './products/search.pipe';
import { StarComponent } from './shared/star.component' ;
import { RouterModule } from '@angular/router' ;
import { ProductDetailsComponent} from './products/product-details.component' ;

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { StarRating } from './shared/star.rating';
import { ProductService } from './products/product.service' ;
import { HttpClientModule } from '@angular/common/http';
import { OrdersComponent } from './orders/orders.component' ;

@NgModule({

    //All modules declare here
    imports :[
        BrowserModule,
        FormsModule,
        NgbModule,
        HttpClientModule,
        RouterModule.forRoot([
            {path : 'home',component : HomeComponent},
            {path : 'orders',component:OrdersComponent},
            {path: 'products',component:ProductComponent},
            {path : 'products/:id',component:ProductDetailsComponent},
            {path : '',redirectTo:'home',pathMatch:'full'}

        ])
    ],
    //All Components,Directives and Pipes will be declare here
    declarations :[
        AppComponent,
        HomeComponent,
        ProductComponent,
        MyUpperCasePipe,
        MyDiscountPipe,
        MySearchPipe,
        StarComponent,
        StarRating,
        OrdersComponent,
        ProductDetailsComponent
    ],
    //Only Main Component goes here
    bootstrap : [AppComponent],

    //All Services
    providers :[
        ProductService
    ]
})

export class AppModule{

}