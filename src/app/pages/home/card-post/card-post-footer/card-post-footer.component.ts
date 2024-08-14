import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { octChevronUp, octChevronDown, octCommentDiscussion, octShare, octTrash, octPencil } from '@ng-icons/octicons';

@Component({
  selector: 'app-card-post-footer',
  standalone: true,
  imports: [
    NgIcon
  ],
  providers: [provideIcons({
    octChevronUp,
    octChevronDown,
    octCommentDiscussion,
    octShare,
    octTrash,
    octPencil,
  })],
  templateUrl: './card-post-footer.component.html',
  styleUrl: './card-post-footer.component.css'
})
export class CardPostFooterComponent {

}
