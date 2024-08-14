import { Component, Input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { ModalComponent } from "../../../../generic-components/modal/modal.component";
import { CardPostHeaderEditModalComponent } from "./card-post-header-edit-modal/card-post-header-edit-modal.component";
import { CardPostHeaderExcludeModalComponent } from "./card-post-header-exclude-modal/card-post-header-exclude-modal.component";
import { Publication } from '../../../../publication';

@Component({
  selector: 'app-card-post-header',
  standalone: true,
  imports: [
    NgIcon,
    ModalComponent,
    CardPostHeaderEditModalComponent,
    CardPostHeaderExcludeModalComponent
],
  templateUrl: './card-post-header.component.html',
  styleUrl: './card-post-header.component.css'
})
export class CardPostHeaderComponent {
  editModalIsOpen = false;
  @Input({
    required: true
  }) publication!: Publication;
}
