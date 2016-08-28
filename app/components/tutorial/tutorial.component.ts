import { Component } from '@angular/core';

import { TutorialTitle } from './title.component';

@Component({
    selector: 'tutorial',
    directives: [ TutorialTitle ],
    template: `
        <tut-title></tut-title>
    `
})
export class TutorialApp {}