import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MealJsonResponse } from 'src/app/entity/MealJsonResponse';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() searchByFirstLetterEvent = new EventEmitter<MealJsonResponse>();
  @Output() isMealsEmptyEvent = new EventEmitter<boolean>();
  @Output() firstLetterEvent = new EventEmitter<string>();
  meals: MealJsonResponse = new MealJsonResponse();

  letters: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.meals.meals = null as any;
    this.searchByFirstLetterEvent.emit(this.meals);
    this.isMealsEmptyEvent.emit(null as any);
  }

  searchByFirstLetter(letter: string): void {
      this.http.get(environment.API_URL + "/meal/v1/search?fl=" + letter, { observe: 'response' })
      .subscribe({
        next: (res) => {
          this.meals = JSON.parse(JSON.stringify(res.body));
          this.firstLetterEvent.emit(letter);
          this.isMealsEmptyEvent.emit(this.isMealsEmpty(this.meals));
          this.searchByFirstLetterEvent.emit(this.meals);
      },
      error: (err) => {
        console.error(err);
        alert('ERROR POP UP SHOULD APPEAR!');
     }
    });
  }

  private isMealsEmpty(meals: MealJsonResponse): boolean {
    return meals.meals === null ? true : false;
  }

}
