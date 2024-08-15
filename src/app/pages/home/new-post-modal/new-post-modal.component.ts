import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { octShare } from '@ng-icons/octicons';
import { PublicationService } from '../../../publication.service';
import { Publication } from '../../../publication';

@Component({
  selector: 'app-new-post-modal',
  standalone: true,
  imports: [
    NgIcon,
    ReactiveFormsModule,
  ],
  providers: [
    provideIcons({
      octShare
    })
  ],
  templateUrl: './new-post-modal.component.html',
  styleUrl: './new-post-modal.component.css'
})
export class NewPostModalComponent {
  isActive = false;

  editForm = new FormGroup({
    title: new FormControl<string>(''),
    body: new FormControl<string>(''),
  })

  constructor (private publicationService: PublicationService) {}

  closeModal () {
    this.isActive = false;
  }

  submitForm () {
    this.publicationService.addPublication({
      body: this.editForm.value.body,
      title: this.editForm.value.title,
    } as Publication);
    this.editForm.reset();
    this.closeModal();

    window.location.reload();
  }

  autoGrowTextHeight(_event: any) {
    const event = _event as InputEvent;
    (event.target as any).style.height = "5px";
    (event.target as any).style.height = ((event.target as any).scrollHeight) + "px";
  }
}
