import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Meal } from 'src/app/entity/Meal';
import { MealJsonResponse } from 'src/app/entity/MealJsonResponse';

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
    this.http.get("http://localhost:8070/meal/random", { observe: 'response' })
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
