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
var ArticleRow = (function () {
    function ArticleRow() {
    }
    ArticleRow.prototype.voteUp = function () {
        this.article.voteUp();
        return false;
    };
    ArticleRow.prototype.voteDown = function () {
        this.article.voteDown();
        return false;
    };
    ArticleRow = __decorate([
        core_1.Component({
            selector: 'reddit-article',
            inputs: ['article'],
            directives: [index_1.ArticleImage, index_1.ArticleCategories],
            host: {
                class: 'row'
            },
            template: "\n    <div class=\"two wide column center aligned votes\">\n        <div class=\"ui statistic\">\n            <div class=\"value\">\n                {{ article.votes }}\n            </div>\n            <div class=\"label\">\n                Points\n            </div>\n        </div>\n    </div>\n    <reddit-article-image *ngIf=\"article.image\" class=\"two wide column\" [image]=\"article.image\"></reddit-article-image>\n    <div class=\"twelve wide column\">\n        <a class=\"ui large header\" href=\"{{ article.link }}\" target=\"_blank\">{{ article.title }}</a>\n        <div class=\"meta\">({{ article.domain() }})</div>\n        <reddit-article-categories *ngIf=\"article.categories\" [categories]=\"article.categories\"></reddit-article-categories>\n        <ul class=\"ui big horizontal list voters\">\n            <li class=\"item\">\n                <a href (click)=\"voteUp()\">\n                    <i class=\"arrow up icon\"></i>\n                    upvote\n                </a>\n            </li>\n            <li class=\"item\">\n                <a href (click)=\"voteDown()\">\n                    <i class=\"arrow down icon\"></i>\n                    downvote\n                </a>\n            </li>\n        </ul>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ArticleRow);
    return ArticleRow;
}());
exports.ArticleRow = ArticleRow;
//# sourceMappingURL=article-row.js.map