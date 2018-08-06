import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormControlComponent } from './components/form-control/form-control.component';
import { FormControlErrorComponent } from './components/form-control-error/form-control-error.component';
import { FormGroupComponent } from './components/form-group/form-group.component';
import { FormBuilderService } from './services/form-builder.service';

import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatAutocompleteModule, MatInputModule,MatFormFieldModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent, FormControlComponent, FormControlErrorComponent, FormGroupComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule,
    MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatAutocompleteModule, MatInputModule,MatFormFieldModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatAutocompleteModule, MatInputModule,MatFormFieldModule
  ],
  providers: [FormBuilderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
