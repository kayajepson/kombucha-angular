import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model'

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  editButtonClicked(kegToEdit: Keg) {
  this.clickSender.emit(kegToEdit);
}
onChange(optionFromMenu) {
  this.filterByCompleteness = optionFromMenu;
}

toggleDone(clickedKeg: Keg, setCompleteness: boolean) {
   clickedKeg.done = setCompleteness;
 }

filterByCompleteness: string = "incompleteKegs"; //is this where it goes

  kegs: Keg[] = [
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

  priceColor(currentKeg){
    if (currentKeg.price === 4){
      return "bg-light";
    } else if (currentKeg.price === 3) {
      return  "bg-info";
    } else {
      return "bg-success";
    }
  }
}
