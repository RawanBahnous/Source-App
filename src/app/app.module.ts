import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import { reducer } from './Store/worksource/Reducers/worksource.reducer';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SourcenameComponent } from './Components/sourcename/sourcename.component';
import { SourcetypeComponent } from './Components/sourcetype/sourcetype.component';
import { SourcereservComponent } from './Components/sourcereserv/sourcereserv.component';
import { WorktimeComponent } from './Components/worktime/worktime.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {TranslateLoader , TranslateModule} from  '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SourcenameComponent,
    SourcetypeComponent,
    SourcereservComponent,
    WorktimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    StoreModule.forRoot({ worksource: reducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
