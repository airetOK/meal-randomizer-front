import { Component, Input, OnChanges } from '@angular/core';
import { Meal } from 'src/app/entity/Meal';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnChanges {

  @Input() meal: Meal = new Meal();

  constructor() {}

  ngOnChanges(): void {
    const cardCoverStyle = (<HTMLElement>document.querySelector(".card__cover")).style;
    cardCoverStyle.backgroundImage = 'url(' + this.meal.strMealThumb + ')';
    cardCoverStyle.backgroundSize = '100% 100%';
    cardCoverStyle.backgroundRepeat = 'no-repeat';
    }

}
