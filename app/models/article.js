"use strict";
var Article = (function () {
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
exports.Article = Article;
//# sourceMappingURL=article.js.map