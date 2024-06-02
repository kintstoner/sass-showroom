import { Component } from '@angular/core';
import { CtaComponent } from '../../components/trillo/cta/cta.component';
import { DescriptionComponent } from '../../components/trillo/description/description.component';
import { GalleryComponent } from '../../components/trillo/gallery/gallery.component';
import { InlineButtonComponent } from '../../components/trillo/inline-button/inline-button.component';
import { OverviewComponent } from '../../components/trillo/overview/overview.component';
import { SearchBarComponent } from '../../components/trillo/search-bar/search-bar.component';
import { SideNavComponent } from '../../components/trillo/side-nav/side-nav.component';
import { UserNavComponent } from '../../components/trillo/user-nav/user-nav.component';
import { UserReviewsComponent } from '../../components/trillo/user-reviews/user-reviews.component';

@Component({
  selector: 'app-trillo',
  standalone: true,
  imports: [
    SearchBarComponent,
    UserNavComponent,
    SideNavComponent,
    GalleryComponent,
    OverviewComponent,
    DescriptionComponent,
    InlineButtonComponent,
    UserReviewsComponent,
    CtaComponent,
  ],
  templateUrl: './trillo.component.html',
  styleUrl: './trillo.component.scss',
})
export class TrilloComponent {}
