import { Component,OnChanges,Input,Output,EventEmitter } from '@angular/core' ;

@Component({
    selector : 'app-star',
    templateUrl : './star.component.html',
    styleUrls : ['./star.component.css']
})

export class StarComponent implements OnChanges{
    starWidth:number ;
    @Input()rating:number ;
    @Output()ratingClicked : EventEmitter<string> = new EventEmitter<string>() ;

    ngOnChanges(){
        this.starWidth = this.rating * 86/6 ;
    }
    onStar():void{
        this.ratingClicked.emit(`The Rating Clicked is ${this.rating}`)
    }

}