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
var core_1 = require("@angular/core");
// Model
var article_1 = require("../../models/article");
var ArticleForm = (function () {
    function ArticleForm() {
        this.newArticle = new core_1.EventEmitter();
    }
    ArticleForm.prototype.addArticle = function (title, link) {
        this.newArticle.emit(new article_1.Article(title.value, link.value));
        title.value = '';
        link.value = '';
        this.article = null;
    };
    ArticleForm = __decorate([
        core_1.Component({
            selector: 'reddit-form',
            inputs: ['article'],
            outputs: ['newArticle'],
            template: "\n    <form class=\"ui large form segment\">\n        <h3 class=\"ui header\">Add a link</h3>\n        <div class=\"field\">\n            <label for=\"title\">Title:</label>\n            <input name=\"title\" #newTitle />\n        </div>\n        <div class=\"field\">\n            <label for=\"link\">Link:</label>\n            <input name=\"link\" #newLink />\n        </div>\n        <button (click)=\"addArticle(newTitle, newLink)\" class=\"ui positive right floated button\">Submit</button>\n    </form>\n    ",
        }), 
        __metadata('design:paramtypes', [])
    ], ArticleForm);
    return ArticleForm;
}());
exports.ArticleForm = ArticleForm;
//# sourceMappingURL=article-form.js.map