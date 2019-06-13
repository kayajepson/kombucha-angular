import { Component } from '@angular/core';
import { Keg } from './models/keg.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentFocus: string = 'What we have on tap:';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedKeg = null;


  masterKegList: Keg[] = [
    new Keg('Strawberry Basil', 3, 'strawberries and two types of basil', 'Brew Dr'),
    new Keg('Power Flower', 4, 'hibiscus, orange, lemon thyme, and green tea', 'Brew Dr'),
    new Keg('Clear Mind', 3, 'rosemary, mint, sage and green tea', 'Brew Dr'),
    new Keg('Love', 3, 'Jasmine and lavender', 'Brew Dr'),
    new Keg('Mint Lemonade', 4, 'spearmint, peppermint, lemons and green tea', 'Brew Dr'),
    new Keg('Ginger Tumeric', 3, 'ginger and turmeric', 'Brew Dr'),
    new Keg('Superberry', 3, 'various berries', 'Brew Dr'),
    new Keg('Uplift', 4, 'nettle, mint, Yerba máte, and Sencha green tea', 'Brew Dr'),
    new Keg('Happiness', 3, 'white tea paired with pink rose petals', 'Brew Dr'),
    new Keg('Spiced Apple', 3, 'Cinnamon, clove and nutmeg combine with dried apple', 'Brew Dr'),
    new Keg('Citus Hops', 4, 'white tea leaves and two types of NW hops', 'Brew Dr'),
    new Keg('Lemon Ginger Cayenne', 3, 'cayenne pepper, with green tea and lemongrass', 'Brew Dr')
  ];

  editKeg(kegToEdit) {
    this.selectedKeg = kegToEdit;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  addKeg(newKeg: Keg) {
    this.masterKegList.push(newKeg);
  }

}
