import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

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
  img: any;

  @ViewChild('dogVideo', { static: true }) private myVid: ElementRef;
  @ViewChild('dogCanvas', { static: true }) private myCanvas: ElementRef;

  constructor() { }

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
    this.myVid.nativeElement.volume = 0.04;
    this.myVid.nativeElement.loop = true;
    if (this.showJphoto) {
      this.myVid.nativeElement.play();

      this.img = new Image();
      this.img.src = 'assets/jxb3.jpg';

      const context = this.myCanvas.nativeElement.getContext('2d');
      this.img.onload = () => context.drawImage(this.img, 10, 0, 300, 300);
    } else {
      this.myVid.nativeElement.pause();
    }
  }
}
