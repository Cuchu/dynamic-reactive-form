import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AppMaterialComponent } from './components/material/app-material.component';
import { AppBootstrapComponent } from './components/bootstrap/app-bootstrap.component';

export  const routes: Routes = [
    { path: '', redirectTo: 'material', pathMatch: 'full' },
    { path: 'material', component: AppMaterialComponent },
    { path: 'bootstrap', component: AppBootstrapComponent },
    { path: '**', component: AppMaterialComponent }
  ];
  
  export const appRoutingProviders:any[] = [];
  export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
