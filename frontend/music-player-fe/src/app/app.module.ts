import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

export function createTranslationLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

const modules = [
  BrowserModule,
  BrowserAnimationsModule,
  HttpClientModule,
  SharedModule,
  LoggerModule.forRoot({
    level: NgxLoggerLevel.TRACE, // remove later just for debugging
    disableConsoleLogging: false,
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
  ],
  imports: modules,
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
