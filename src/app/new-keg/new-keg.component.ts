import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-new-keg',
  templateUrl: './new-keg.component.html',
  styleUrls: ['./new-keg.component.css']
})

export class NewKegComponent {
  @Output() sendKeg = new EventEmitter();

  submitForm(name: string, price: string, flavor: string, brand: string) {
    let newKeg: Keg = new Keg(name, parseInt(price), flavor, brand);
    this.sendKeg.emit(newKeg);
  }
}
