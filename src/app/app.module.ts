import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './public/home/home.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {SharedModule} from "./shared/shared.module";
import {UrlInterceptor} from "./shared/interceptors/url.interceptor";
import {NavComponent} from "./public/nav/nav.component";



@NgModule({
  declarations: [
    NavComponent,
    AppComponent,
    HomeComponent,
  ],
  imports: [BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: UrlInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
