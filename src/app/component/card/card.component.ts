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
    this.setDefaultImageIfMealThumbNotPresent(this.meal.strMealThumb, cardCoverStyle);
    cardCoverStyle.backgroundSize = '100% 100%';
    cardCoverStyle.backgroundRepeat = 'no-repeat';
    }

    public isEmpty(value: string): boolean {
      return value ? true : false;
    }

    private setDefaultImageIfMealThumbNotPresent(mealThumb: string, style: CSSStyleDeclaration) {
      if (!mealThumb) {
        style.backgroundImage = 'url("/assets/no-image-available.jpg")'
      } else {
        style.backgroundImage = 'url(' + mealThumb + ')';
      }
    }

}
