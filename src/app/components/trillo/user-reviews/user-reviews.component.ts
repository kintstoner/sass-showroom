import { Component } from '@angular/core';
import { InlineButtonComponent } from '../inline-button/inline-button.component';

@Component({
  selector: 'app-user-reviews',
  standalone: true,
  imports: [InlineButtonComponent],
  templateUrl: './user-reviews.component.html',
  styleUrl: './user-reviews.component.scss',
})
export class UserReviewsComponent {
  userReviews = [
    {
      id: 1,
      name: 'Nick Smith',
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor, est nec luctus.',
      rating: 7.8,
      date: 'Feb 23rd, 2024',
      img: 'assets/img/user-1.jpg',
    },
    {
      id: 2,
      name: 'Mary Smith',
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor, est nec luctus.',
      rating: 9.2,
      date: 'Sep 13th, 2023',
      img: 'assets/img/user-2.jpg',
    },
  ];
}
