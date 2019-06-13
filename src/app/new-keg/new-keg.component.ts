import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-new-keg',
  templateUrl: './new-keg.component.html',
  styleUrls: ['./new-keg.component.css']
})

export class NewKegComponent {
  @Output() sendKeg = new EventEmitter();

  submitForm(description: string, priority: string) {
    let newKeg: Keg = new Keg(description, parseInt(priority));
    this.sendKeg.emit(newKeg);
  }
}
