import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPostContentComponent } from './card-post-content.component';

describe('CardPostContentComponent', () => {
  let component: CardPostContentComponent;
  let fixture: ComponentFixture<CardPostContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPostContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPostContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
