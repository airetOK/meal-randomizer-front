import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { BadgeComponent } from './component/badge/badge.component';
import { ContainerComponent } from './component/container/container.component';
import { CardComponent } from './component/card/card.component';
import { ProgressBarComponent } from './component/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BadgeComponent,
    ContainerComponent,
    CardComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
