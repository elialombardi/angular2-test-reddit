import { bootstrap } from "@angular/platform-browser-dynamic";
// import { Component, EventEmitter } from "@angular/core";
// import { FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup } from "@angular/forms";

// Components
import { ArticleApp } from "./components/article-app/index";

// Models
import { Article } from "./models/article";

bootstrap(ArticleApp)
.catch((err: any) => console.log(err));
;