// @Component({
//     selector: 'test-form',
//     template: `
//     <div class="ui raised segment">
//         <h2>Test form</h2>
//         <form [FormGroup]="myForm" (ngSubmit)="onSubmit(myForm.value) class="ui form">
//             <div class="field">
//                 <label for="skuInput">SKU:</label>
//                 <input type="text" id="skuInput" plaveholder="sku" [formControl]="myForm.controls['sku']" />
//             </div>
//             <button type="submit" class="ui button">Submit</button>
//         </form>
//     </div>
//     `,
//     directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES]
// })
// class TestForm {
//     myForm: FormGroup;
//     constructor(fb: FormBuilder) {
//         this.myForm = fb.group({
//             'sku': ['ABCD1234']
//         });
//     }
//     onSubmit(value: string) {
//         console.log('you submitted ', + value)
//     }
// }
// @Component({
//     selector: 'test-form',
//     template: `
//     <div class="ui raised segment">
//         <h2>Test form</h2>
//     </div>
//     `
// })
// class TestForm {
// } 
//# sourceMappingURL=test.js.map