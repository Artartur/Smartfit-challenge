import { Component } from '@angular/core';
import { Legend } from '../../utils/constants';

@Component({
  selector: 'app-legend',
  templateUrl: './legend.component.html',
  styleUrl: './legend.component.scss',
})

export class LegendComponent {
  closed = Legend.CLOSED;
  forbidden = Legend.FORBIDDEN;
  fountain = Legend.FOUNTAIN;
  free = Legend.FREE;
  lockerroom = Legend.LOCKERROOM;
  mask = Legend.MASK;
  partial = Legend.PARTIAL;
  recommended = Legend.RECOMMENDED;
  required = Legend.REQUIRED;
  towel = Legend.TOWEL;
}
