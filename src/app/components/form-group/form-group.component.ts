import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'form-group',
  templateUrl: './form-group.component.html'
})

export class FormGroupComponent implements OnInit{

    @Input('element') element: any;
    @Input('formGroupName') formGroupName: string;
    @Input('form') form: FormGroup;

    constructor() {}
    
    ngOnInit() {}
}