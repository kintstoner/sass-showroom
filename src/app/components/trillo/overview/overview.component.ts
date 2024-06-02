import { Component } from '@angular/core';
import { InlineButtonComponent } from '../inline-button/inline-button.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [InlineButtonComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
})
export class OverviewComponent {}
