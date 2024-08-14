import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPostFooterShareModalComponent } from './card-post-footer-share-modal.component';

describe('CardPostFooterShareModalComponent', () => {
  let component: CardPostFooterShareModalComponent;
  let fixture: ComponentFixture<CardPostFooterShareModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPostFooterShareModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPostFooterShareModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
