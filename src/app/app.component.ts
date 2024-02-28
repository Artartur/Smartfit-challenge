import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isClosed: boolean;
  showOptions: boolean;
  listData: any;
  selectedOption: string = '';

  constructor() {}

  hiddenOptions(show: boolean){
    this.showOptions = show;
  }

  showAvaiableUnits(data: any) {
    this.listData = data;
  }

  showClosedUnits(closed: boolean){
    this.isClosed = closed;
  }


  updateOption(option: string) {
    this.selectedOption = option;
  }
}
