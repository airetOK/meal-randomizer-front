import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Meal } from 'src/app/entity/Meal';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test strSource and strYoutube', () => {
    const meal = new Meal();
    meal.strSource = 'test-source';
    component.meal = meal;
    fixture.detectChanges();
    const a: HTMLElement[] = fixture.nativeElement.querySelectorAll('p a');
    expect(a.length).toBe(1);
    expect(a[0].getAttribute('href')).toBe(meal.strSource);
  });

  it('test default card-cover image', () => {
    const meal = new Meal();
    meal.strMealThumb = '';
    component.meal = meal;
    component.ngOnChanges();
    fixture.detectChanges();
    const a: HTMLElement = fixture.nativeElement.querySelector('.card__cover');
    expect(a.style.backgroundImage).toBe('url("/assets/no-image-available.jpg")');
  });
});
