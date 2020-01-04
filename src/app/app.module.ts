import { NgModule } from '@angular/core' ;
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser' ;
import { HomeComponent } from './home.component';
import { ProductComponent } from './products/product.component' ;
import { FormsModule } from '@angular/forms' ;
import { MyUpperCasePipe } from './products/myupper.pipe' ;
import { MyDiscountPipe } from './products/discount.pipe' ;

@NgModule({

    //All modules declare here
    imports :[
        BrowserModule,
        FormsModule
    ],
    //All Components,Directives and Pipes will be declare here
    declarations :[
        AppComponent,
        HomeComponent,
        ProductComponent,
        MyUpperCasePipe,
        MyDiscountPipe
    ],
    //Only Main Component goes here
    bootstrap : [AppComponent],

    //All Services
    providers :[]
})

export class AppModule{

}