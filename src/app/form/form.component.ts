import { Component, EventEmitter, Output } from '@angular/core';
import { Form } from '../../utils/constants';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  @Output() dataUpdated: EventEmitter<any> = new EventEmitter<any>();
  @Output() isUnitClosed: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() isShowOptions: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() optionSelected: EventEmitter<string> = new EventEmitter<string>();

  afternoon = Form.AFTERNOON;
  afternoonPeriod = Form.AFTERNOON_PERIOD;
  clear = Form.CLEAR;
  closed = Form.CLOSED_UNITS;
  find = Form.FIND_UNITS;
  found = Form.FOUND_UNITS;
  morning = Form.MORNING;
  morningPeriod = Form.MORNING_PERIOD;
  night = Form.NIGHT;
  nightPeriod = Form.NIGHT_PERIOD;
  period = Form.MSG_TRAINGING_PERIOD;
  time = Form.TIME;

  closedUnits: boolean = false;
  option: string = '';
  storageData: any = {};
  showOptions: boolean;

  constructor(private apiService: ApiService) {}

  clearData() {
    this.closedUnits = false;
    this.option = '';
    this.isShowOptions.emit((this.showOptions = false));
  }

  getPeriod() {
    this.apiService.getData().subscribe((data) => {
      this.dataUpdated.emit(data?.locations);
    });
    this.isShowOptions.emit((this.showOptions = true));
  }

  selectOption(option: string) {
    this.option = option;
    this.optionSelected.emit(this.option);
  }

  showClosedUnits(closed: boolean) {
    this.closedUnits = closed;
    this.isUnitClosed.emit(this.closedUnits);
  }
}
