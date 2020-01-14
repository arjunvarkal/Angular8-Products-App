import {NgModule} from '@angular/core' ;
import { StarComponent } from '../shared/star.component' ;
import { CommonModule } from '@angular/common' ;
import { FormsModule } from '@angular/forms' ;


@NgModule({
    imports :[
        CommonModule,
        FormsModule
    ],
    declarations:[
        StarComponent
    ],
    exports:[
        CommonModule,
        FormsModule,
        StarComponent
    ]
})

export class SharedModule{

}