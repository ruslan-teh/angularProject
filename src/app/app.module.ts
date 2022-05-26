import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './components/header-components/header/header.component';
import { HomePageComponent } from './components/home-page-components/home-page/home-page.component';
import {AppRoutingModule} from "./app-routing.module";
import { PostDetailsComponent } from './components/post-components/post-details/post-details.component';
import { CommentDetailsComponent } from './components/comment-components/comment-details/comment-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
