import { Component, OnInit, Input } from '@angular/core';
import { VatService } from './../vat.service';

@Component({
  selector: 'app-vat-calculator',
  templateUrl: './vat-calculator.component.html',
  styleUrls: ['./vat-calculator.component.css']
})
export class VatCalculatorComponent implements OnInit {
  @Input() vat: number;

  article = 'Tesla';
  value: number = 1000;
  result: number = 0;

  constructor(private vatService: VatService) { }

  ngOnInit() {
  }

  calculate(){
    this.result = this.vatService.calculate(this.value, this.vat);
  }

}
