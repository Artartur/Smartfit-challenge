import { Component } from '@angular/core';
import { Header } from '../../utils/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  title = Header.NOTE;
  description = Header.REOPENING_UNITS;
}
