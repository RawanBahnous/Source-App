import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


/**
 * The `TranslationService` provides translation functionality
 * by using TranslateService from ngx
 * @param Translator - An instance of the TranslateService for translations.
 *
 *
 *
 *
 * Service has one primary flag And 5 Methods
 * allowing it to display content in different languages 'ar' => arabic | 'en' => english
 * and set text direction based on the selected language either 'RTL' => Right to left | 'LTR' => Left to Right
*/


@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  direction: string | undefined;

  constructor(private Translator: TranslateService) { }

  setLanguage(langCode: string) {
    this.Translator.use(langCode);
    this.setDirection(langCode);
  }

  getTranslation(key: string): string {
    return this.Translator.instant(key);
  }

  setDefault(Default: string) {
    this.Translator.setDefaultLang(Default);
    this.setDirection(Default);
  }

  private setDirection(langCode: string) {
    this.direction = langCode === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', this.direction);
  }

  getCurrentDir() {
    const lang = this.Translator.getDefaultLang();
    return lang === 'ar' ? 'rtl' : 'ltr';
  }
}
