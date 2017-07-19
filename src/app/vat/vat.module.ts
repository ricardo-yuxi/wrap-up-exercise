import { VatService } from './vat.service';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VatComponent } from './vat/vat.component';
import { VatCalculatorComponent } from './vat-calculator/vat-calculator.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [VatComponent, VatCalculatorComponent],
  providers: [VatService],
  exports: [VatComponent]
})
export class VatModule { }
