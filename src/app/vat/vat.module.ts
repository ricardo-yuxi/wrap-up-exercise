import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VatComponent } from './vat.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [VatComponent],
  exports: [VatComponent]
})
export class VatModule { }
