import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/nexter/header/header.component';
import { FeaturesComponent } from '../../components/nexter/features/features.component';
import { StoryContentComponent } from '../../components/nexter/story-content/story-content.component';
import { HomeCardComponent } from '../../components/nexter/home-card/home-card.component';

@Component({
  selector: 'app-nexter',
  standalone: true,
  imports: [
    HeaderComponent,
    FeaturesComponent,
    StoryContentComponent,
    HomeCardComponent,
  ],
  templateUrl: './nexter.component.html',
  styleUrl: './nexter.component.scss',
})
export class NexterComponent {
  gallery = new Array(14).fill(null).map((_, i) => i + 1);

  homeCards = [
    {
      img: 'house-1.jpeg',
      alt: 'House 1',
      title: 'Beautiful Family House',
      location: 'USA',
      rooms: 5,
      area: 325,
      price: 1200000,
    },
    {
      img: 'house-2.jpeg',
      alt: 'House 2',
      title: 'Modern Glass Villa',
      location: 'Canada',
      rooms: 6,
      area: 450,
      price: 2750000,
    },
    {
      img: 'house-3.jpeg',
      alt: 'House 3',
      title: 'Cozy Country House',
      location: 'UK',
      rooms: 4,
      area: 250,
      price: 850000,
    },
    {
      img: 'house-4.jpeg',
      alt: 'House 4',
      title: 'Large Rustical Villa',
      location: 'Portugal',
      rooms: 6,
      area: 480,
      price: 1750000,
    },
    {
      img: 'house-5.jpeg',
      alt: 'House 5',
      title: 'Majestic Palace House',
      location: 'Germany',
      rooms: 18,
      area: 4230,
      price: 9500000,
    },
    {
      img: 'house-6.jpeg',
      alt: 'House 6',
      title: 'Modern Family Apartment',
      location: 'Italy',
      rooms: 3,
      area: 180,
      price: 600000,
    },
  ];
}
