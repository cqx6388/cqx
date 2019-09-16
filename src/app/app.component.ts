import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SideBarItem } from './side-bar-item';
import { LanguageService } from './language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  personal = new SideBarItem();
  education = new SideBarItem();
  project = new SideBarItem();
  job = new SideBarItem();
  work = new SideBarItem();
  evaluation = new SideBarItem();
  visitor = new SideBarItem();
  sideBarItemArray: Array<SideBarItem>;
  language = '中文';
  particalParams: any;

  constructor(private langService: LanguageService) {
    this.personal.title = '个人信息';
    this.personal.router = '/Personal';
    this.personal.items = [];

    this.education.title = '教育经历';
    this.education.items = [
      {
        name: '西南科技大学',
        router: '/Education'
      }
    ];

    this.project.title = '项目经验';
    this.project.items = [
      {
        name: 'QT+Linux+CAN总线+串口',
        router: '/Project'
      },
      {
        name: 'Wince系统',
        router: '/Project'
      },
      {
        name: 'MarkII系列嵌入式智能终端',
        router: '/Project'
      },
    ];

    this.job.title = '求职意向';
    this.job.items = [
      {
        name: '职位',
        router: '/Job'
      }
    ];

    this.work.title = '工作经历';
    this.work.items = [
      {
        name: '上海鲍麦克斯',
        router: '/Work'
      }
    ];

    this.evaluation.title = '自我评价';
    this.evaluation.router = '/Evaluation';
    this.evaluation.items = [];

    this.visitor.title = '来客登记';
    this.visitor.router = '/Visitor';
    this.visitor.items = [];

    this.sideBarItemArray = [this.personal, this.education, this.project, this.job, this.work, this.evaluation];
    // this.sideBarItemArray = [this.personal, this.education, this.project, this.job, this.work, this.evaluation, this.visitor];

    this.langService.getLanguagePackage('中文').subscribe();

    this.particalParams = {
      particles: {
        number: {
          value: 120,
        },
        color: {
          value: '#FFFFFF'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 3,
            color: '#FFFFFF'
          },
          polygon: {
            nb_sides: 4
          },

        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.5,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 1,
            size_min: 0.5,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#ffffff',
          opacity: 0.4,
          width: 2
        },
        move: {
          enable: true,
          speed: 1,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      }
    };
  }

  switchLang($event) {
    console.log($event.target.textContent);
    this.language = $event.target.textContent;
    this.langService.getLanguagePackage($event.target.textContent).subscribe();
  }
}
