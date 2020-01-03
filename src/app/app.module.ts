import { NgModule } from '@angular/core' ;
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser' ;
import { HomeComponent } from './home.component';
import { ProductComponent } from './products/product.component' ;

@NgModule({

    //All modules declare here
    imports :[
        BrowserModule,
    ],
    //All Components,Directives and Pipes will be declare here
    declarations :[
        AppComponent,
        HomeComponent,
        ProductComponent
    ],
    //Only Main Component goes here
    bootstrap : [AppComponent],

    //All Services
    providers :[]
})

export class AppModule{

}