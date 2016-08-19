import { bootstrap } from "@angular/platform-browser-dynamic";
import { Component, EventEmitter } from "@angular/core";

class Article {
    static articlesCounter: number = 0
    id: number;
    title: string;
    link: string;
    votes: number;
    image: string;
    categories: string[];

    constructor(title: string, link: string, votes?:number, image?: string, categories?: string[]) {
        this.id = Article.articlesCounter++;
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
        this.image = image || '';
        this.categories = categories || [];
    }

    voteUp() {
        this.votes += 1;
    }

    voteDown() {
        this.votes -= 1;
    }

    domain(): string {
        try {
            let link: string = this.link.split('//')[1];
            
            link = link.split('/')[0];
            
            if(/^www./.test(link)) link = link.split('www.')[1];

            return link;
        } catch (err) {
            return this.link;
        }
    }

    equals(article: Article): boolean {
        return (article.id === this.id);
    }
}

@Component({
    selector: 'reddit-article-image',
    inputs: ['image'],
    template: `
    <img [src]="image" />
    `
})
class ArticleImage {
    image: string;
}

@Component({
    selector: 'reddit-article-categories',
    inputs: ['categories'],
    template: `
    <div class="article-categories">
    <span *ngFor="let c of categories; let i=index">
        <a href='#'>{{c}}</a>
        {{ i < (categories.length - 1) ? '>' : '' }}
    </span>
    </div>
    `
})
class ArticleCategories {
    categories: string[];
}

@Component({
    selector: 'reddit-article',
    inputs: ['article'],
    directives: [ArticleImage, ArticleCategories],
    host: {
        class: 'row'
    },
    template: `
    <div class="two wide column center aligned votes">
        <div class="ui statistic">
            <div class="value">
                {{ article.votes }}
            </div>
            <div class="label">
                Points
            </div>
        </div>
    </div>
    <reddit-article-image *ngIf="article.image" class="two wide column" [image]="article.image"></reddit-article-image>
    <div class="twelve wide column">
        <a class="ui large header" href="{{ article.link }}" target="_blank">{{ article.title }}</a>
        <div class="meta">({{ article.domain() }})</div>
        <reddit-article-categories *ngIf="article.categories" [categories]="article.categories"></reddit-article-categories>
        <ul class="ui big horizontal list voters">
            <li class="item">
                <a href (click)="voteUp()">
                    <i class="arrow up icon"></i>
                    upvote
                </a>
            </li>
            <li class="item">
                <a href (click)="voteDown()">
                    <i class="arrow down icon"></i>
                    downvote
                </a>
            </li>
        </ul>
    </div>
    `
})
class ArticleComponent {
    article: Article;

    constructor() {
    }

    voteUp() {
        this.article.voteUp();
        return false;
    }

    voteDown() {
        this.article.voteDown();
        return false;
    }
}

@Component({
    selector: 'reddit-form',
    inputs: ['article'],
    outputs: ['newArticle'],
    template: `
    <form class="ui large form segment">
        <h3 class="ui header">Add a link</h3>
        <div class="field">
            <label for="title">Title:</label>
            <input name="title" #newTitle />
        </div>
        <div class="field">
            <label for="link">Link:</label>
            <input name="link" #newLink />
        </div>
        <button (click)="addArticle(newTitle, newLink)" class="ui positive right floated button">Submit</button>
    </form>
    `,

})
class ArticleForm {
    article: Article;
    newArticle: EventEmitter<Article>;

    constructor() {
        this.newArticle = new EventEmitter();
    }

    addArticle(title:HTMLInputElement, link:HTMLInputElement): void {
        this.newArticle.emit(new Article(title.value, link.value));
        title.value = '';
        link.value = '';
        this.article = null;
    }

    
}

@Component({
    selector: 'reddit',
    directives: [ArticleComponent, ArticleForm],
    template: `
    <reddit-form (newArticle)="newArticle($event)"></reddit-form>
    <div class="ui grid posts">
        <reddit-article
            *ngFor="let article of sortedArticles()" 
            [article]="article" 
            (click)="selectedArticle(article)"
            [class.selected]="isSelected(article)">
        </reddit-article>
    </div>
    `
})
class RedditApp {
    articles: Article[];
    currentArticle: Article;
    onArticleSelected: EventEmitter<Article>;

    constructor() {
        this.onArticleSelected = new EventEmitter();
        this.articles = [
            new Article('Angular2 di Elia Lombardi', 
                'http://www.elia.lombardi.it',
                10,
                'https://unsplash.it/200?random',
                ['development', 'frontend', 'frameworks']),
            new Article('React di Elia Lombardi', 'http://www.elia.lombardi.it', 5, 'https://unsplash.it/300/400?random'),
            new Article('MongodDB di Elia Lombardi', 'http://www.elia.lombardi.it', 0, 'https://unsplash.it/200/100?random'),
        ];
        
    }
    newArticle(article:Article): void {
        this.articles.push(article);
    }
    sortedArticles(): Article[] {
        return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
    }
    isSelected(article: Article): boolean {
        if(!article || !this.currentArticle) return false;
        
        return article.equals(this.currentArticle);
    }
    selectedArticle(article: Article): void {
        this.currentArticle = article;
        this.onArticleSelected.emit(article);
    }
};

bootstrap(RedditApp);