import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input({
    required: true
  }) isOpen: boolean;
  @Output() onChange = new EventEmitter<boolean>();

  constructor() {
    this.isOpen = false;
  }

  openModal(): void {
    this.isOpen = true;
    this.onChange.emit(this.isOpen);
  }

  closeModal(): void {
    this.isOpen = false;
    this.onChange.emit(this.isOpen);
  }

  backdropClick(e: MouseEvent): void {
    e.stopPropagation();
  }

  insideClick(e: MouseEvent): void {
    e.stopPropagation();
    // To prevent the backdropClick event from being triggered
    e.stopPropagation();
  }
}
