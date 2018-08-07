import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'form-group-material',
  templateUrl: './form-group-material.component.html'
})

export class FormGroupMaterialComponent implements OnInit{

    @Input('element') element: any;
    @Input('formGroup') formGroup: FormGroup;
    @Input('form') form: FormGroup;
    @Input('formElement') formElement: any;
    @Input('formGroupName') formGroupName: any;

    constructor() {}
    
    ngOnInit() {
      console.log(this.formElement);
      console.log(this.element);
    }
}