import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

//
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
           { name: 'Can总线', max: 10},
           { name: 'Linux & Qt', max: 10},
           { name: 'C++', max: 10},
           { name: 'C', max: 10},
           { name: 'Agular', max: 10},
           { name: 'javascript', max: 10}
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            // {
            //     value : [4300, 10000, 28000, 35000, 50000, 19000],
            //     // name : '预算分配（Allocated Budget）'
            // },
             {
                value : [8, 9, 8, 7, 5, 5],
                // name : '实际开销（Actual Spending）'
            }
        ]
    }]
};
//
}
