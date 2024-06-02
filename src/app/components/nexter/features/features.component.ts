import { Component } from '@angular/core';
import { FeatureComponent } from '../feature/feature.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, FeatureComponent],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
})
export class FeaturesComponent {
  features = [
    {
      icon: 'assets/img/sprite2.svg#icon-global',
      title: "World's best luxury homes",
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.',
    },
    {
      icon: 'assets/img/sprite2.svg#icon-trophy',
      title: 'Only the best properties',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio.',
    },
    {
      icon: 'assets/img/sprite2.svg#icon-map-pin',
      title: 'All homes in top locations',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia nesciunt quia accusantium necessitatibus.',
    },
    {
      icon: 'assets/img/sprite2.svg#icon-key',
      title: 'New home in one week',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      icon: 'assets/img/sprite2.svg#icon-presentation',
      title: 'Top 1% realtors',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.Lorem ipsum dolor sit amet consectetur.',
    },
    {
      icon: 'assets/img/sprite2.svg#icon-lock',
      title: 'Secure payments on Nexter',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.voluptatibus.Lorem ipsum dolor sit amet consectetur.',
    },
  ];
}
