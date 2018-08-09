/* https://angular-templates.io/tutorials/about/angular-forms-and-validations */
/* https://code.tutsplus.com/es/tutorials/introduction-to-forms-in-angular-4-reactive-forms--cms-29787 */

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
/* import { object } from './object';
import { FormBuilderService } from './services/form-builder.service'; */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  
  constructor() {}

  ngOnInit() {
    console.log("ngOnInit");
  }
}
