import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable()

export class FormBuilderService {

  constructor() { }

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

  public createForm(object) {

    const formGroup = {};

    for(let prop of Object.keys(object)) {
      if(object[prop].group) { //FormControl
        var subGroup = {};
        for(let subProp of Object.keys(object[prop].elements)) {
          var element = object[prop].elements[subProp];
          subGroup[element.key] = new FormControl(element.value || '', this.mapValidators(element.validation));
        }
        formGroup[prop] = new FormGroup(subGroup);
      } else { //FormControl
        formGroup[prop] = new FormControl(object[prop].value || '', this.mapValidators(object[prop].validation));
      }
    }

    return new FormGroup(formGroup);
  }

}