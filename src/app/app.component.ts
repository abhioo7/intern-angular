import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import './_content/app.less';
import './_content/modal.less';
export type EditorType = 'name' | 'profile';
@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent {
}