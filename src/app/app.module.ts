import { NgModule } from '@angular/core' ;
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser' ;
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router' ;
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';
import { OrdersComponent } from './orders/orders.component' ;
import { SharedModule } from './shared/shared.module' ;
import { ProductModule } from './products/product.module' ;
import { AppRoutingModule } from './app-routing.module' ;

@NgModule({

    //All modules declare here
    imports :[
        BrowserModule,
        NgbModule,
        HttpClientModule,
        SharedModule,
        ProductModule,
        AppRoutingModule
    ],
    //All Components,Directives and Pipes will be declare here
    declarations :[
        AppComponent,
        HomeComponent,
        OrdersComponent
    ],
    //Only Main Component goes here
    bootstrap : [AppComponent],

    //All Services
    providers :[
        
    ]
})

export class AppModule{

}