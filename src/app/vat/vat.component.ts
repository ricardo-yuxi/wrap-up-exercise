import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vat',
  templateUrl: './vat.component.html',
  styleUrls: ['./vat.component.css']
})
export class VatComponent implements OnInit {
  @Input() vat: number;

  article = 'Tesla';
  value: number = 1000;
  result: number = 0;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.result = this.value * this.vat;
  }

}
