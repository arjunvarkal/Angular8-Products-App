import { NgModule } from '@angular/core' ;
import {Routes,RouterModule } from '@angular/router' ;
import { HomeComponent } from './home/home.component';
import { OrdersComponent  } from './orders/orders.component' ;
import {ProductComponent} from './products/product.component' ;
import {ProductDetailsComponent} from './products/product-details.component' ;
import { RouterGuards } from './products/product.guard' ;

const routes : Routes = [
    {path : 'home',component : HomeComponent},
    {path : 'orders',component:OrdersComponent},
    {path : '',redirectTo:'home',pathMatch:'full'},
    {path: 'products',component:ProductComponent},
    {path : 'products/:id',canActivate:[RouterGuards],component:ProductDetailsComponent},
    {path : '**', component:HomeComponent}

]

@NgModule({
    imports:[
       RouterModule.forRoot(routes) 
    ],
    exports:[
        RouterModule
    ],
    providers:[
        RouterGuards
    ]
})

export class AppRoutingModule{


}
