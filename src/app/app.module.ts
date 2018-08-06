import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormControlComponent } from './components/form-control/form-control.component';
import { FormControlErrorComponent } from './components/form-control-error/form-control-error.component';
import { FormGroupComponent } from './components/form-group/form-group.component';

@NgModule({
  declarations: [
    AppComponent, FormControlComponent, FormControlErrorComponent, FormGroupComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
