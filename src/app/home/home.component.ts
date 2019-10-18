import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as d3 from 'd3';

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
  dataset = [250, 210, 170, 130, 90];
  rectHeight = 25;
  // linear: any;

  @ViewChild('dogVideo', { static: true }) private myVid: ElementRef;
  @ViewChild('dogCanvas', { static: true }) private myCanvas: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  // ngAfterViewInit() {
  //   const svg = d3.select('#dogSVG')
  //     .attr('width', 180)
  //     .attr('height', 228);

  //   svg.selectAll('rect')
  //     .data(this.dataset)
  //     .enter()
  //     .append('rect')
  //     .attr('x', function(d, i) {
  //       return i * 30;
  //     })
  //     .attr('y', function(d, i) {
  //       return 10 + 250 - d;
  //     })
  //     .attr('height', function(d) {
  //       return d;
  //       // return this.linear(d);
  //     })
  //     .attr('width', this.rectHeight - 2)
  //     .attr('fill', 'steelblue')
  //     .on('mouseover', function(d, i) {
  //       d3.select(this)
  //           .attr('fill', 'yellow');
  //   })
  //   .on('mouseout', function(d, i) {
  //       d3.select(this)
  //           .transition()
  //           .duration(500)
  //           .attr('fill', 'steelblue');
  //   });
  // }

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
