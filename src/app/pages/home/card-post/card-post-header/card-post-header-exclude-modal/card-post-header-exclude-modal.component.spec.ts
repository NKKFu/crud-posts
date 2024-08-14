import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPostHeaderExcludeModalComponent } from './card-post-header-exclude-modal.component';

describe('CardPostHeaderExcludeModalComponent', () => {
  let component: CardPostHeaderExcludeModalComponent;
  let fixture: ComponentFixture<CardPostHeaderExcludeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPostHeaderExcludeModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPostHeaderExcludeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
