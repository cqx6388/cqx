import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
    selector: 'app-evaluation',
    templateUrl: './evaluation.component.html',
    styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit, AfterViewInit {
    dataset = [250, 210, 170, 130, 90, 120];
    rectHeight = 25;

    cakeData = [80, 75, 80, 90, 60, 60];
    cakeList = ['can总线', 'C', 'C++', 'qt+Linux', 'javascript', 'Angular'];
    pie = d3.pie();
    piedata = this.pie(this.cakeData);

    linear = d3.scaleLinear()
        .domain([0, d3.max(this.dataset)])
        .range([0, 180]);

    projection = d3.geoMercator()
        .center([107, 31])
        .scale(850)
        .translate([200, 200]);

    constructor() { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        const svg = d3.select('#dogSVG')
            .attr('viewBox', '-30, -30, 210, 230')
            .attr('width', 180)
            .attr('height', 200);
            // .attr('transform', 'translate(' + 400 + ',' + 0 + ')');

        const yscale = d3.scaleLinear()
            .domain([0, d3.max(this.dataset)])
            .range([180, 0]);

        const axis = d3.axisLeft()
            .scale(yscale)      // 指定比例尺
            .ticks(6);

        // const xScale = d3.scaleOrdinal()
        //     .domain(d3.range(this.dataset.length));
        //     // .rangeRound([0, 6]);

        // const xAxis = d3.axisBottom()
        //     .scale(xScale);

        const that = this;
        svg.selectAll('rect')
            .data(this.dataset)
            .enter()
            .append('rect')
            .attr('x', function (d, i) {
                return i * that.rectHeight;
            })
            .attr('y', function (d, i) {
                return 180 - that.linear(d);
            })
            .attr('height', function (d) {
                // return d;
                return that.linear(d);
            })
            .attr('width', this.rectHeight - 2)
            .attr('fill', 'steelblue')
            .on('mouseover', function (d, i) {
                d3.select(this)
                    .attr('fill', 'yellow');
            })
            .on('mouseout', function (d, i) {
                d3.select(this)
                    .transition()
                    .duration(500)
                    .attr('fill', 'steelblue');
            });

        svg.append('g')
            .attr('class', 'axis')
            .call(axis);

        // svg.append("g")
        //     .attr("class", "axis")
        //     // .attr("transform", "translate(" + padding.left + "," + (40 - padding.bottom) + ")")
        //     .call(xAxis);
        // **********************************************************************************************************************
        const svgCake = d3.select('#cakeSVG')
            .attr('width', 300)
            .attr('height', 300);

        const outerRadius = 150; // 外半径
        const innerRadius = 0; // 内半径，为0则中间没有空白
        const color = d3.scaleOrdinal(d3.schemeCategory10);

        const arc = d3.arc()  // 弧生成器
            .innerRadius(innerRadius)   // 设置内半径
            .outerRadius(outerRadius);  // 设置外半径

        const arcs = svgCake.selectAll('g')
            .data(this.piedata)
            .enter()
            .append('g')
            .attr('transform', 'translate(' + (150) + ',' + (150) + ')');

        arcs.append('path')
            .attr('fill', function (d, i) {
                return color(i);
            })
            .attr('d', function (d) {
                return arc(d);   // 调用弧生成器，得到路径值
            });

        arcs.append('text')
            .attr('transform', function (d) {
                return 'translate(' + arc.centroid(d) + ')';
            })
            .attr('text-anchor', 'middle')
            .text(function (d) {
                return d.data;
            });

        svgCake.selectAll('text')
            .text(function (d, i) {
                return that.cakeList[i] + '(' + d.data + ')';
            });
    }
    // ************************************************************************************

    // ************************************************************************************
    // tslint:disable-next-line: member-ordering
    option = {
        title: {
            text: '能力雷达图'
        },
        tooltip: {
        },
        legend: {
            data: ['我的能力']
        },
        radar: {
            name: {
                textStyle: {
                    color: '#fff',
                    backgroundColor: '#999',
                    borderRadius: 3,
                    padding: [3, 5]
                }
            },
            indicator: [
                { name: 'Can总线', max: 10 },
                { name: 'Linux & Qt', max: 10 },
                { name: 'C++', max: 10 },
                { name: 'C', max: 10 },
                { name: 'Agular', max: 10 },
                { name: 'javascript', max: 10 }
            ]
        },
        series: [{
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [
                // {
                //     value : [4300, 10000, 28000, 35000, 50000, 19000],
                //     // name : '预算分配（Allocated Budget）'
                // },
                {
                    value: [8, 9, 8, 7, 5, 5],
                    // name : '实际开销（Actual Spending）'
                }
            ]
        }]
    };
    //
}
