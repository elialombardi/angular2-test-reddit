import { Component } from "@angular/core";

// Model
import { Article } from "../../models/article";

// Components
import { ArticleImage, ArticleCategories } from "./index";

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
export class ArticleRow {
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