import { Component, Input } from '@angular/core';
import { Publication } from '../../../publication';
import { CardPostHeaderComponent } from "./card-post-header/card-post-header.component";
import { CardPostContentComponent } from "./card-post-content/card-post-content.component";
import { CardPostFooterComponent } from "./card-post-footer/card-post-footer.component";

@Component({
  selector: 'app-card-post',
  standalone: true,
  imports: [
    CardPostHeaderComponent,
    CardPostContentComponent,
    CardPostFooterComponent
],
  templateUrl: './card-post.component.html',
  styleUrl: './card-post.component.css'
})
export class CardPostComponent {
  @Input({
    required: true
  }) publication!: Publication;

  constructor() { }
}
