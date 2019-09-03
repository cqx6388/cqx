import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  LangVM = {};

  constructor(private http: HttpClient) {}

  getLanguagePackage(lang: string) {
    let langURL;
    switch (lang) {
      case '中文':
        langURL = 'assets/lang/Chinese.json';
        break;
      case 'English':
        langURL = 'assets/lang/English.json';
        break;
      default:
        langURL = 'assets/lang/Chinese.json';
    }
    return this.http.get(langURL).pipe(
      tap((data) => {this.LangVM = data; console.log(this.LangVM); })
    );
  }

  getDisplayText(key) {
    if (this.LangVM.hasOwnProperty(key)) {
      return this.LangVM[key];
    } else {
      return '';
    }
  }
}
