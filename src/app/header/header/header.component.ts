import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() navListener = new EventEmitter<string>();
  collapsed = true;

  constructor() {}

  ngOnInit(): void {}

  onSelect(name: string) {
    this.navListener.emit(name);
  }
}
