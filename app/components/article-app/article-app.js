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
// Components
var index_1 = require("./index");
// Model
var article_1 = require("../../models/article");
var ArticleApp = (function () {
    function ArticleApp() {
        this.onArticleSelected = new core_1.EventEmitter();
        this.articles = [
            new article_1.Article('Angular2 di Elia Lombardi', 'http://www.elia.lombardi.it', 10, 'https://unsplash.it/200?random', ['development', 'frontend', 'frameworks']),
            new article_1.Article('React di Elia Lombardi', 'http://www.elia.lombardi.it', 5, 'https://unsplash.it/300/400?random'),
            new article_1.Article('MongodDB di Elia Lombardi', 'http://www.elia.lombardi.it', 0, 'https://unsplash.it/200/100?random'),
        ];
    }
    ArticleApp.prototype.newArticle = function (article) {
        this.articles.push(article);
    };
    ArticleApp.prototype.sortedArticles = function () {
        return this.articles.sort(function (a, b) { return b.votes - a.votes; });
    };
    ArticleApp.prototype.isSelected = function (article) {
        if (!article || !this.currentArticle)
            return false;
        return article.equals(this.currentArticle);
    };
    ArticleApp.prototype.selectedArticle = function (article) {
        this.currentArticle = article;
        this.onArticleSelected.emit(article);
    };
    ArticleApp = __decorate([
        core_1.Component({
            selector: 'reddit',
            directives: [index_1.ArticleRow, index_1.ArticleForm],
            template: "\n    <reddit-form (newArticle)=\"newArticle($event)\"></reddit-form>\n    <div class=\"ui grid posts\">\n        <reddit-article\n            *ngFor=\"let article of sortedArticles()\" \n            [article]=\"article\" \n            (click)=\"selectedArticle(article)\"\n            [class.selected]=\"isSelected(article)\">\n        </reddit-article>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ArticleApp);
    return ArticleApp;
}());
exports.ArticleApp = ArticleApp;
;
//# sourceMappingURL=article-app.js.map