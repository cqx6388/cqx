import { Component, OnInit } from '@angular/core';
import { VisitorRegService } from '../visitor-reg.service';
class UserInfo {
  public surname: string;
  public telNumber: string;
  public company: string;
  constructor() {
    this.company = '';
    this.telNumber = '';
    this.surname = '';
  }
}
@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.css']
})
export class VisitorComponent implements OnInit {
  public surname: string;
  public telNumber: number;
  public company: string;
  public information: UserInfo;
  public inforArray: Array<UserInfo>;

  constructor(public visitorService: VisitorRegService) {
    this.information = new UserInfo();
   }

  ngOnInit() {
    const savedInfo = this.visitorService.get('info');
    savedInfo ? this.inforArray = savedInfo : this.inforArray = [];
  }

  confirmClick(evt) {
    if (!(/^1[3456789]\d{9}$/.test(this.information.telNumber))) {
      alert('手机号码有误，请重填');
      return false;
  }
    if (this.information.surname === '') {
      alert('未填写完整');
      return;
  }
    if (this.information.company === '') {
      alert('未填写完整');
      return;
  }

    this.inforArray.push(JSON.parse(JSON.stringify(this.information)));
    this.inforArray = this.inforArray.filter((element, index, self) => {
      return self.map((x) => JSON.stringify(x)).indexOf(JSON.stringify(element)) === index;
   });
    this.visitorService.set('info', this.inforArray);
    console.log('Second location' + this.visitorService.get('info'));
  }

  removeList(i) {
    this.inforArray.splice(i, 1);
    this.visitorService.set('info', this.inforArray);
  }

  checkForm() {
    return true;
  }
}
