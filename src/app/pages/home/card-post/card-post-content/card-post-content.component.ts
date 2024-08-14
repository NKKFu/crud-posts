import { Component, Input } from '@angular/core';
import { Publication } from '../../../../publication';

@Component({
  selector: 'app-card-post-content',
  standalone: true,
  imports: [],
  templateUrl: './card-post-content.component.html',
  styleUrl: './card-post-content.component.css'
})
export class CardPostContentComponent {
  @Input({
    required: true
  }) publication!: Publication;
}
