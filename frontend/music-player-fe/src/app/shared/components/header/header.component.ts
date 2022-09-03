import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ColorThemeService } from '../../services/themes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(
    private translateService: TranslateService, 
    private colorThemeService: ColorThemeService
  ) { }

  ngOnInit(): void {
    const colorTheme: 'light' | 'dark' = JSON.parse(localStorage.getItem('colorTheme') as string);
    console.log("Color schema: ", colorTheme)
    this.setColorTheme(colorTheme? colorTheme: 'dark');
  }

  changeLang(langCode: string): void {
    this.translateService.use(langCode);
  }

  setColorTheme(mode: 'light' | 'dark'): void {
    this.colorThemeService.setTheme(mode);
    localStorage.setItem('colorTheme', JSON.stringify(mode));
  }

}
