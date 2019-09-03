import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SideBarItem } from '../side-bar-item';

@Component({
  selector: 'app-side-bar-item',
  templateUrl: './side-bar-item.component.html',
  styleUrls: ['./side-bar-item.component.css']
})
export class SideBarItemComponent implements OnInit {

  expanded: boolean;
  @Input() sideBarItem: SideBarItem;
  @Output() hideContainer = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  navToggle() {
    this.expanded = !this.expanded;
  }

  hideEvent($event){
    this.expanded = false;
    this.hideContainer.emit(this.expanded);
  }
}
