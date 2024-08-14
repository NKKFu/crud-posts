import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPostFooterComponent } from './card-post-footer.component';

describe('CardPostFooterComponent', () => {
  let component: CardPostFooterComponent;
  let fixture: ComponentFixture<CardPostFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPostFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPostFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
