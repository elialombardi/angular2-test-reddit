import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ArticleApp } from "./components/article-app/index";
import { TutorialApp } from "./components/tutorial/tutorial.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ TutorialApp, ArticleApp ],
  bootstrap:    [ TutorialApp, ArticleApp ]
})
export class AppModule { }