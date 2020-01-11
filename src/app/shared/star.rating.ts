import { Component, Input } from '@angular/core' ;

@Component({
    selector : 'app-star-rating',
    templateUrl : '/star.rating.html',
})

export class StarRating{

    @Input()rating:number ;
    max :number = 5 ;
}