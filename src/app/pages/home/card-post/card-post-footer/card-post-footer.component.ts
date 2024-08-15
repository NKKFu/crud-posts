import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { octChevronUp, octChevronDown, octCommentDiscussion, octShare, octTrash, octPencil } from '@ng-icons/octicons';
import { ModalComponent } from "../../../../generic-components/modal/modal.component";
import { Publication } from '../../../../publication';

@Component({
  selector: 'app-card-post-footer',
  standalone: true,
  imports: [
    NgIcon,
    ModalComponent,
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
  @Input({
    required: true
  }) publication!: Publication;
  postUrl = '';
  isShareModalOpen = false;

  scrollToElement(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  copyContent($event: MouseEvent) {
    $event.stopPropagation();
    const el = document.createElement('textarea');
    el.value = this.postUrl;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }

  openShareModal($event: MouseEvent) {
    $event.stopPropagation();
    this.postUrl = window.location.origin + '/posts/' + this.publication.id;
    this.isShareModalOpen = true;
  }
}
