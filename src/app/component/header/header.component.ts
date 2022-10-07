import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() showAboutEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  public showAbout(): void {
    this.showAboutEvent.emit(true);
  }

}
