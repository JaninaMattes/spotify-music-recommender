import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CardsComponent } from './cards/cards.component';
import { HomeComponent } from './home/home.component';

export function createTranslationLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

const modules = [
  BrowserModule,
  BrowserAnimationsModule,
  HttpClientModule,
  SharedModule,
  LoggerModule.forRoot({
    level: NgxLoggerLevel.TRACE, // remove later just for debugging
    disableConsoleLogging: false
  }),
  TranslateModule.forRoot({
    defaultLanguage: 'en',
    loader: {
      provide: TranslateLoader,
      useFactory: createTranslationLoader,
      deps: [HttpClient],
    }
  }),
  AppRoutingModule
]

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    HomeComponent
  ],
  imports: modules,
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
