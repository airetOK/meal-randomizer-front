import { Component, Input, OnChanges, AfterViewChecked, OnDestroy } from '@angular/core';
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
    this.setDefaultImageIfMealThumbNotPresent(this.meal.strMealThumb, this.meal);
  }

  public isEmpty(value: string): boolean {
    return value ? true : false;
  }

  private setDefaultImageIfMealThumbNotPresent(mealThumb: string, meal: Meal) {
    if (!mealThumb) {
      meal.strMealThumb = '/assets/no-image-available.jpg'
    }
  }

}
