import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputOutputComponent } from './components/input-output/input-output.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [InputOutputComponent],
  exports: [InputOutputComponent]
})
export class SharedModule { }
