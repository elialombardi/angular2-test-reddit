import { Component, EventEmitter } from "@angular/core";

// Model
import { Article } from "../../models/article";

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
export class ArticleForm {
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