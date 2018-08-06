import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'form-control-error',
  templateUrl: './form-control-error.component.html'
})

export class FormControlErrorComponent implements OnInit{

    @Input('element') element: any;
    @Input('formElement') formElement: any;

    constructor() {}
    
    ngOnInit() {}
}