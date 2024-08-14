import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPostHeaderComponent } from './card-post-header.component';

describe('CardPostHeaderComponent', () => {
  let component: CardPostHeaderComponent;
  let fixture: ComponentFixture<CardPostHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPostHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPostHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
