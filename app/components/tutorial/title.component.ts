import { Component } from '@angular/core';

import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'tut-title',
  template: '<h1 highlight>{{title}}</h1>',
  directives: [ HighlightDirective ]
})
export class TutorialTitle {
  title = 'Minimal NgModule';
}