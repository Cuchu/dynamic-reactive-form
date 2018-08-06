/* https://angular-templates.io/tutorials/about/angular-forms-and-validations */
/* https://code.tutsplus.com/es/tutorials/introduction-to-forms-in-angular-4-reactive-forms--cms-29787 */

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { dynamic } from './dynamic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'dynamic-form';
  dataObject = dynamic;
  form: FormGroup;
  objectProps:Array<any>;
  
  constructor() {}

  ngOnInit() {
    console.log("ngOnInit");
    // remap the API to be suitable for iterating over it
    this.objectProps = Object.keys(this.dataObject).map(prop => {
        return Object.assign({}, { key: prop} , this.dataObject[prop]);
    });

    // setup the form
    const formGroup = {};

    for(let prop of Object.keys(this.dataObject)) {
      if(this.dataObject[prop].group) {
        
        var subGroup = {};
        for(let subProp of Object.keys(this.dataObject[prop].elements)) {
          var element = this.dataObject[prop].elements[subProp];
          subGroup[element.key] = new FormControl(element.value || '', this.mapValidators(element.validation));
        }
        formGroup[prop] = new FormGroup(subGroup);
      } else {
        formGroup[prop] = new FormControl(this.dataObject[prop].value || '', this.mapValidators(this.dataObject[prop].validation));
      }
    }
    
    console.log(formGroup);

    this.form = new FormGroup(formGroup);
  }

  private mapValidators(validators) {
    const formValidators = [];
    if(validators) {
      for(const validation of Object.keys(validators)) {
        if(validation === 'required') {
          formValidators.push(Validators.required);
        } else if(validation === 'email') {
          formValidators.push(Validators.email);
        } else if(validation === 'min') {
          formValidators.push(Validators.min(validators[validation]));
        } else if(validation === 'max') {
          formValidators.push(Validators.max(validators[validation]));
        } else if(validation === 'minLength') {
          formValidators.push(Validators.minLength(validators[validation]));
        } else if(validation === 'maxLength') {
          formValidators.push(Validators.maxLength(validators[validation]));
        }
      }
    }

    return formValidators;
  }

  onSubmit(form) {
    console.log(form);
  }
}
