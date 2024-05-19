import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBankComponent } from './footer-bank.component';

describe('FooterBankComponent', () => {
  let component: FooterBankComponent;
  let fixture: ComponentFixture<FooterBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterBankComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
