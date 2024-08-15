import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ModalComponent } from '../../../../../generic-components/modal/modal.component';
import { octTrash } from '@ng-icons/octicons';
import { Publication } from '../../../../../publication';
import { PublicationService } from '../../../../../publication.service';

@Component({
  selector: 'app-card-post-header-exclude-modal',
  standalone: true,
  imports: [
    ModalComponent,
    NgIcon
  ],
  providers: [
    provideIcons({
      octTrash,
    })
  ],
  templateUrl: './card-post-header-exclude-modal.component.html',
  styleUrl: './card-post-header-exclude-modal.component.css'
})
export class CardPostHeaderExcludeModalComponent {
  @Input({
    required: true
  })
  publication !: Publication;
  excludeModalIsOpen = false;

  constructor(private publicationService: PublicationService) { }

  cancelPost(): void {
    this.excludeModalIsOpen = false;
  }

  deletePost(): void {
    this.publicationService.deletePublication(this.publication);
    this.excludeModalIsOpen = false;

    // Reload the page to reflect the changes
    window.location.reload();
  }

  openModal(e: Event) {
    e.stopPropagation();
    this.excludeModalIsOpen = true;
  }
}
