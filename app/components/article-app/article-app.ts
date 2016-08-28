import { Component, EventEmitter } from "@angular/core";

// Components
import { ArticleRow, ArticleForm } from "./index";

// Model
import { Article } from "../../models/article";

@Component({
    selector: 'reddit',
    directives: [ArticleRow, ArticleForm],
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
export class ArticleApp {
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