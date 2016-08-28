"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var highlight_directive_1 = require('./highlight.directive');
var TutorialTitle = (function () {
    function TutorialTitle() {
        this.title = 'Minimal NgModule';
    }
    TutorialTitle = __decorate([
        core_1.Component({
            selector: 'tut-title',
            template: '<h1 highlight>{{title}}</h1>',
            directives: [highlight_directive_1.HighlightDirective]
        }), 
        __metadata('design:paramtypes', [])
    ], TutorialTitle);
    return TutorialTitle;
}());
exports.TutorialTitle = TutorialTitle;
//# sourceMappingURL=title.component.js.map