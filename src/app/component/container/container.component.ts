import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Meal } from 'src/app/entity/Meal';
import { MealJsonResponse } from 'src/app/entity/MealJsonResponse';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor(private http: HttpClient) { }

  badgeValue: string = '';
  isCardVisible: boolean = false;
  meals: MealJsonResponse = new MealJsonResponse();
  meal: Meal = new Meal();

  ngOnInit(): void {
  }

  search(): void {
    this.http.get(environment.API_URL + "/meal/v1/random", { observe: 'response' })
    .subscribe(res => {  
      if (res.status == 200) {
        this.badgeValue = "RETRY";
        this.meals = JSON.parse(JSON.stringify(res.body));
        this.isCardVisible = true;
        this.meal = this.meals.meals[0];
        console.log(this.meal);
      }
    });
  }

}
