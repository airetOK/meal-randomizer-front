import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/constants';
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
  letter: string = '';
  isCardVisible: boolean = false;
  isProgressBarVisible: boolean = false;
  meals: MealJsonResponse = new MealJsonResponse();
  meal: Meal = new Meal();
  isAboutDialogVisible = false;
  isSearchDialogVisible = false;
  isMealsEmpty: any = null;
  about = Constants.about.eng; 

  ngOnInit(): void {
  }
  
  showAboutDialog(event: boolean) {
    this.isAboutDialogVisible = event;
    this.isSearchDialogVisible = false;
    this.isCardVisible = false;
  }

  showSearchDialog(event: boolean) {
    this.isSearchDialogVisible = event;
    this.isCardVisible = false;
    this.isAboutDialogVisible = false;
  }

  showMeals(event: boolean) {
    this.isMealsEmpty = event;
  }

  setIsProgressBarVisible(event: boolean) {
    this.isProgressBarVisible = event;
  }

  getMealsByFirstLetter(event: MealJsonResponse) {
    this.meals = event;
  }

  setFirstLetter(event: string) {
    this.letter = event;
  }

  search(): void {
    this.isProgressBarVisible = true;
    this.isCardVisible = false;
    this.isAboutDialogVisible = false;
    this.isSearchDialogVisible = false;
    this.http.get(environment.API_URL + "/meal/v1/random", { observe: 'response' })
    .subscribe({
      next: (res) => {
        this.meals = JSON.parse(JSON.stringify(res.body));
        this.isCardVisible = true;
        this.meal = this.meals.meals[0];
        this.isProgressBarVisible = false;
      },
      error: (err) => {
        console.error(err);
        alert('ERROR POP UP SHOULD APPEAR!');
        this.isProgressBarVisible = false;
      }
    });
  }

}
