import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ModalComponent } from '../../../../../generic-components/modal/modal.component';
import { octTrash } from '@ng-icons/octicons';

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
  excludeModalIsOpen = false;

  cancelPost(): void {
    this.excludeModalIsOpen = false;
  }

  deletePost(): void {
    this.excludeModalIsOpen = false;
  }
}
