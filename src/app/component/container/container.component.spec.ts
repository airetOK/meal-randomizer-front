import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Constants } from 'src/app/constants';
import { BadgeComponent } from '../badge/badge.component';
import { CardComponent } from '../card/card.component';
import { HeaderComponent } from '../header/header.component';

import { ContainerComponent } from './container.component';

describe('ContainerComponent', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ ContainerComponent, 
                      BadgeComponent, 
                      HeaderComponent, 
                      CardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('show About modal', () => {
    component.isAboutDialogVisible = true;
    fixture.detectChanges();
    const about: HTMLElement = fixture.nativeElement.querySelector('.about');
    expect(about.innerHTML.trim()).toBe(Constants.about.eng);
  });
});
