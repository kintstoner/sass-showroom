import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'btn-inline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inline-button.component.html',
  styleUrl: './inline-button.component.scss',
})
export class InlineButtonComponent {
  @Input() text: string = '';
  @Input() icon: boolean = false;
}
