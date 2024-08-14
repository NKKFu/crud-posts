import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPostHeaderEditModalComponent } from './card-post-header-edit-modal.component';

describe('CardPostHeaderEditModalComponent', () => {
  let component: CardPostHeaderEditModalComponent;
  let fixture: ComponentFixture<CardPostHeaderEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPostHeaderEditModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPostHeaderEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
