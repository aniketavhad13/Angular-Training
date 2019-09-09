import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TwoWayBindingComponent } from './components/bindings/two-way-binding/two-way-binding.component';
import { CustomDirectiveComponent } from './components/directives/custom-directive/custom-directive.component';
import { CustomPipeComponent } from './components/pipes/custom-pipe/custom-pipe.component';
import { TemplateDrivenFormComponent } from './components/forms/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './components/forms/reactive-form/reactive-form.component';
import { DataSharingComponent } from './components/data-sharing/data-sharing.component';
import { DefaultPipeComponent } from './components/pipes/default-pipe/default-pipe.component';
import { StructuralDirectiveComponent } from './components/directives/structural-directive/structural-directive.component';
import { OneWayBindingComponent } from './components/bindings/one-way-binding/one-way-binding.component';

const routes: Routes = [
  { path: '', redirectTo: 'lazy-load-module', pathMatch: 'full'},

  {path : 'one-way-binding', component: OneWayBindingComponent},
  {path : 'two-way-binding', component: TwoWayBindingComponent},
  {path : 'structural-directive', component: StructuralDirectiveComponent},
  {path : 'custom-directive', component: CustomDirectiveComponent},
  {path : 'default-pipe', component: DefaultPipeComponent},
  {path : 'custom-pipe', component: CustomPipeComponent},
  {path : 'template-driven-form', component: TemplateDrivenFormComponent},
  {path : 'reactive-form', component: ReactiveFormComponent},
  {path : 'data-sharing', component: DataSharingComponent},

  { path: 'lazy-load-module', loadChildren: './components/auth/auth.module#AuthModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
