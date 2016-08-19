System.register(["@angular/platform-browser-dynamic", "@angular/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var platform_browser_dynamic_1, core_1;
    var Article, ArticleImage, ArticleCategories, ArticleComponent, ArticleForm, RedditApp;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Article = (function () {
                function Article(title, link, votes, image, categories) {
                    this.id = Article.articlesCounter++;
                    this.title = title;
                    this.link = link;
                    this.votes = votes || 0;
                    this.image = image || '';
                    this.categories = categories || [];
                }
                Article.prototype.voteUp = function () {
                    this.votes += 1;
                };
                Article.prototype.voteDown = function () {
                    this.votes -= 1;
                };
                Article.prototype.domain = function () {
                    try {
                        var link = this.link.split('//')[1];
                        link = link.split('/')[0];
                        if (/^www./.test(link))
                            link = link.split('www.')[1];
                        return link;
                    }
                    catch (err) {
                        return this.link;
                    }
                };
                Article.prototype.equals = function (article) {
                    return (article.id === this.id);
                };
                Article.articlesCounter = 0;
                return Article;
            }());
            ArticleImage = (function () {
                function ArticleImage() {
                }
                ArticleImage = __decorate([
                    core_1.Component({
                        selector: 'reddit-article-image',
                        inputs: ['image'],
                        template: "\n    <img [src]=\"image\" />\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ArticleImage);
                return ArticleImage;
            }());
            ArticleCategories = (function () {
                function ArticleCategories() {
                }
                ArticleCategories = __decorate([
                    core_1.Component({
                        selector: 'reddit-article-categories',
                        inputs: ['categories'],
                        template: "\n    <div class=\"article-categories\">\n    <span *ngFor=\"let c of categories; let i=index\">\n        <a href='#'>{{c}}</a>\n        {{ i < (categories.length - 1) ? '>' : '' }}\n    </span>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ArticleCategories);
                return ArticleCategories;
            }());
            ArticleComponent = (function () {
                function ArticleComponent() {
                }
                ArticleComponent.prototype.voteUp = function () {
                    this.article.voteUp();
                    return false;
                };
                ArticleComponent.prototype.voteDown = function () {
                    this.article.voteDown();
                    return false;
                };
                ArticleComponent = __decorate([
                    core_1.Component({
                        selector: 'reddit-article',
                        inputs: ['article'],
                        directives: [ArticleImage, ArticleCategories],
                        host: {
                            class: 'row'
                        },
                        template: "\n    <div class=\"two wide column center aligned votes\">\n        <div class=\"ui statistic\">\n            <div class=\"value\">\n                {{ article.votes }}\n            </div>\n            <div class=\"label\">\n                Points\n            </div>\n        </div>\n    </div>\n    <reddit-article-image *ngIf=\"article.image\" class=\"two wide column\" [image]=\"article.image\"></reddit-article-image>\n    <div class=\"twelve wide column\">\n        <a class=\"ui large header\" href=\"{{ article.link }}\" target=\"_blank\">{{ article.title }}</a>\n        <div class=\"meta\">({{ article.domain() }})</div>\n        <reddit-article-categories *ngIf=\"article.categories\" [categories]=\"article.categories\"></reddit-article-categories>\n        <ul class=\"ui big horizontal list voters\">\n            <li class=\"item\">\n                <a href (click)=\"voteUp()\">\n                    <i class=\"arrow up icon\"></i>\n                    upvote\n                </a>\n            </li>\n            <li class=\"item\">\n                <a href (click)=\"voteDown()\">\n                    <i class=\"arrow down icon\"></i>\n                    downvote\n                </a>\n            </li>\n        </ul>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ArticleComponent);
                return ArticleComponent;
            }());
            ArticleForm = (function () {
                function ArticleForm() {
                    this.newArticle = new core_1.EventEmitter();
                }
                ArticleForm.prototype.addArticle = function (title, link) {
                    this.newArticle.emit(new Article(title.value, link.value));
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
            RedditApp = (function () {
                function RedditApp() {
                    this.onArticleSelected = new core_1.EventEmitter();
                    this.articles = [
                        new Article('Angular2 di Elia Lombardi', 'http://www.elia.lombardi.it', 10, 'https://unsplash.it/200?random', ['development', 'frontend', 'frameworks']),
                        new Article('React di Elia Lombardi', 'http://www.elia.lombardi.it', 5, 'https://unsplash.it/300/400?random'),
                        new Article('MongodDB di Elia Lombardi', 'http://www.elia.lombardi.it', 0, 'https://unsplash.it/200/100?random'),
                    ];
                }
                RedditApp.prototype.newArticle = function (article) {
                    this.articles.push(article);
                };
                RedditApp.prototype.sortedArticles = function () {
                    return this.articles.sort(function (a, b) { return b.votes - a.votes; });
                };
                RedditApp.prototype.isSelected = function (article) {
                    if (!article || !this.currentArticle)
                        return false;
                    return article.equals(this.currentArticle);
                };
                RedditApp.prototype.selectedArticle = function (article) {
                    this.currentArticle = article;
                    this.onArticleSelected.emit(article);
                };
                RedditApp = __decorate([
                    core_1.Component({
                        selector: 'reddit',
                        directives: [ArticleComponent, ArticleForm],
                        template: "\n    <reddit-form (newArticle)=\"newArticle($event)\"></reddit-form>\n    <div class=\"ui grid posts\">\n        <reddit-article\n            *ngFor=\"let article of sortedArticles()\" \n            [article]=\"article\" \n            (click)=\"selectedArticle(article)\"\n            [class.selected]=\"isSelected(article)\">\n        </reddit-article>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], RedditApp);
                return RedditApp;
            }());
            ;
            platform_browser_dynamic_1.bootstrap(RedditApp);
        }
    }
});
//# sourceMappingURL=app.js.map