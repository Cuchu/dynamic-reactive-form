import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormControlComponent } from './components/form-control/form-control.component';
import { FormControlErrorComponent } from './components/form-control-error/form-control-error.component';
import { FormGroupComponent } from './components/form-group/form-group.component';
import { FormBuilderService } from './services/form-builder.service';
import { FormControlMaterialComponent } from './components/form-control-material/form-control-material.component';

import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatAutocompleteModule, MatInputModule,MatFormFieldModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormGroupMaterialComponent } from './components/form-group-material/form-group-material.component';

@NgModule({
  declarations: [
    AppComponent, FormControlComponent, FormControlErrorComponent, FormGroupComponent, FormControlMaterialComponent, FormGroupMaterialComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule,
    MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatAutocompleteModule, MatInputModule,MatFormFieldModule,
    MatRadioModule, MatSelectModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatAutocompleteModule, MatInputModule,MatFormFieldModule
  ],
  providers: [FormBuilderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
