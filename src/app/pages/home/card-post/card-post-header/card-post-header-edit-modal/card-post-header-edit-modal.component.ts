import { Component, Input } from '@angular/core';
import { ModalComponent } from "../../../../../generic-components/modal/modal.component";
import { NgIcon, provideIcons } from '@ng-icons/core';
import { octPencil } from '@ng-icons/octicons';
import { Publication } from '../../../../../publication';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { PublicationService } from '../../../../../publication.service';

@Component({
  selector: 'app-card-post-header-edit-modal',
  standalone: true,
  imports: [
    ModalComponent,
    NgIcon,
    ReactiveFormsModule
  ],
  providers: [
    provideIcons({
      octPencil,
    })
  ],
  templateUrl: './card-post-header-edit-modal.component.html',
  styleUrl: './card-post-header-edit-modal.component.css'
})
export class CardPostHeaderEditModalComponent {
  editModalIsOpen = false;
  @Input({
    required: true
  }) publication!: Publication;
  editForm = new FormGroup({
    title: new FormControl<string>(''),
    body: new FormControl<string>(''),
  })

  openEditModal() {
    this.editModalIsOpen = true;
    
    // Set the form values to the current publication values
    this.editForm.controls.title.setValue(this.publication?.title)
    this.editForm.controls.body.setValue(this.publication?.body)
  }

  savePostChanges() {
    this.publicationService.updatePublication({
      ...this.publication,
      title: this.editForm.controls.title.value || "",
      body: this.editForm.controls.body.value || "",
    });
    this.editModalIsOpen = false;

    // Reload the page to reflect the changes
    window.location.reload();
  }

  constructor(private publicationService: PublicationService) { }
}
