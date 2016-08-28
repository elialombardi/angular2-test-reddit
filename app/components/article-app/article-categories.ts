import { Component } from "@angular/core";

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
export class ArticleCategories {
    categories: string[];
}