import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'form-control-material',
  templateUrl: './form-control-material.component.html'
})

export class FormControlMaterialComponent implements OnInit{

    @Input('element') element: any;
    @Input('formGroup') formGroup: FormGroup;
    @Input('form') form: FormGroup;
    @Input('formElement') formElement: any;

    constructor() {}
    
    ngOnInit() {}
}