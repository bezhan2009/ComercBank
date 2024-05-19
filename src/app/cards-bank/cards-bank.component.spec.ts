import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsBankComponent } from './cards-bank.component';

describe('CardsBankComponent', () => {
  let component: CardsBankComponent;
  let fixture: ComponentFixture<CardsBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsBankComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardsBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
