import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-card',
  standalone: true,
  imports: [],
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.scss',
})
export class HomeCardComponent {
  @Input() img: string = '';
  @Input() alt: string = '';
  @Input() title: string = '';
  @Input() location: string = '';
  @Input() rooms: number = 0;
  @Input() area: number = 0;
  @Input() price: number = 0;

  numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
