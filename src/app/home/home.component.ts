import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = `Chenqiuxia's Resume`;
  showMphoto = false;
  showHphoto = false;
  showJphoto = false;

  constructor() {}

  ngOnInit() {
  }

  showClick($event) {
    this.showMphoto = !this.showMphoto;
  }

  showHClick($event) {
    this.showHphoto = !this.showHphoto;
  }

  showJClick($event) {
    this.showJphoto = !this.showJphoto;
  }
}