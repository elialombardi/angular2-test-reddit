import { Component } from "@angular/core";

@Component({
    selector: 'reddit-article-image',
    inputs: ['image'],
    template: `
    <div [ngStyle]="{'background-image': 'url(' + image + ')'}" ></div>
    `
})
export class ArticleImage {
    image: string;
}