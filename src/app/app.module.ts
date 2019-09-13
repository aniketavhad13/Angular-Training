import { HttpInterceptorService } from './helpers/http-interceptor.service';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneWayBindingComponent } from './components/bindings/one-way-binding/one-way-binding.component';
import { TwoWayBindingComponent } from './components/bindings/two-way-binding/two-way-binding.component';
import { TemplateDrivenFormComponent } from './components/forms/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './components/forms/reactive-form/reactive-form.component';
import { StructuralDirectiveComponent } from './components/directives/structural-directive/structural-directive.component';
import { CustomDirectiveComponent, CustomDirective } from './components/directives/custom-directive/custom-directive.component';

import { DefaultPipeComponent } from './components/pipes/default-pipe/default-pipe.component';
import { CustomPipeComponent, FilterPipe } from './components/pipes/custom-pipe/custom-pipe.component';
import { DataSharingComponent } from './components/data-sharing/data-sharing.component';

@NgModule({
  declarations: [
    AppComponent,
    OneWayBindingComponent,
    TwoWayBindingComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    StructuralDirectiveComponent,
    CustomDirectiveComponent,
    CustomPipeComponent,
    DefaultPipeComponent,
    CustomDirective,
    FilterPipe,
    DataSharingComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    SharedModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
