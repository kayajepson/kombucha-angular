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
    new Keg('Finish weekend Angular homework for Epicodus course', 3),
    new Keg('Begin brainstorming possible JavaScript group projects', 2),
    new Keg('Add README file to last few Angular repos on GitHub', 2)
  ];

  priorityColor(currentKeg){
    if (currentKeg.priority === 3){
      return "bg-light";
    } else if (currentKeg.priority === 2) {
      return  "bg-success";
    } else {
      return "bg-info";
    }
  }
}
