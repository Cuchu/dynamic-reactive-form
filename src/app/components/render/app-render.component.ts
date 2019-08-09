/* https://angular-templates.io/tutorials/about/angular-forms-and-validations */
/* https://code.tutsplus.com/es/tutorials/introduction-to-forms-in-angular-4-reactive-forms--cms-29787 */

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { object } from '../../object-html';
import { FormBuilderService } from '../../services/form-builder.service';

@Component({
  selector: 'render-page',
  templateUrl: './app-render.component.html',
  styleUrls: ['./app.component.css']
})

export class AppRenderComponent implements OnInit{
  title = 'dynamic-render-html';
  dataObject = object;
  objectProps:Array<any>;
  objectProps2 = new Object;
  
  constructor() {}

  ngOnInit() {
    console.log("ngOnInit Render");

    // remap the API to be suitable for iterating over it
    this.objectProps = Object.keys(this.dataObject).map(prop => {
        return Object.assign({}, { key: prop} , this.dataObject[prop]);
    });

    console.log(this.dataObject);
    
  }

  
}
