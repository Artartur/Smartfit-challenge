import { Component } from '@angular/core';
import { Form } from '../../utils/constants';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
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
}
