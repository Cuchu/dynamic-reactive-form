import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'form-control',
  templateUrl: './form-control.component.html'
})

export class FormControlComponent implements OnInit{

    @Input('element') element: any;
    @Input('formGroup') formGroup: FormGroup;
    @Input('form') form: FormGroup;

    constructor() {}
    
    ngOnInit() {}
}