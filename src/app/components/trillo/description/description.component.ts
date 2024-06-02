import { Component } from '@angular/core';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [],
  templateUrl: './description.component.html',
  styleUrl: './description.component.scss',
})
export class DescriptionComponent {
  description: any = {
    info1:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus illum quaerat eius hic nobis dicta dolores officiis ut. Aperiam unde suscipitaliquam aspernatur vero nam labore architecto, nihil molestias alias',
    info2:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus illum quaerat eius hic nobis dicta dolores officiis ut.',
    points: [
      { point: 'Close to the Beach' },
      { point: 'Breakfast included' },
      { point: 'Free airport shuttle' },
      { point: 'Free wifi in all rooms' },
      { point: 'Air conditioning and heating' },
      { point: 'Pets allowed' },
      { point: 'We speak all languages' },
      { point: 'Perfect for families' },
    ],
    recommendation: 'Lucy and 3 other friends recommend this hotel.',
    people: [
      { path: 'assets/img/user-3.jpg', name: 'John Doe' },
      { path: 'assets/img/user-4.jpg', name: 'John Doe' },
      { path: 'assets/img/user-5.jpg', name: 'John Doe' },
      { path: 'assets/img/user-6.jpg', name: 'John Doe' },
    ],
  };
}
