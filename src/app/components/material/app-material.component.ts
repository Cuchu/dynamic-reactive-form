/* https://angular-templates.io/tutorials/about/angular-forms-and-validations */
/* https://code.tutsplus.com/es/tutorials/introduction-to-forms-in-angular-4-reactive-forms--cms-29787 */

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { object } from '../../object';
import { FormBuilderService } from '../../services/form-builder.service';

@Component({
  selector: 'form-material',
  templateUrl: './app-material.component.html',
  styleUrls: ['./app.component.css']
})

export class AppMaterialComponent implements OnInit{
  title = 'dynamic-form-material';
  dataObject = object;
  form: FormGroup;
  objectProps:Array<any>;
  
  constructor(private _formBuilderService: FormBuilderService) {}

  ngOnInit() {
    console.log("ngOnInit material");
    
    // remap the API to be suitable for iterating over it
    this.objectProps = Object.keys(this.dataObject).map(prop => {
        return Object.assign({}, { key: prop} , this.dataObject[prop]);
    });
    
    this.form = this._formBuilderService.createForm(this.dataObject);
  }

  onSubmit(form) {
    console.log(form);
  }
}
