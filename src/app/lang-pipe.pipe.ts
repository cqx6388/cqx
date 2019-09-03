import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService} from './language.service';

@Pipe({
  name: 'langPipe',
  pure: false
})
export class LangPipePipe implements PipeTransform {

  constructor(private langService: LanguageService) {
  }

  transform(key: any): any {
    return this.langService.getDisplayText(key);
  }

}
