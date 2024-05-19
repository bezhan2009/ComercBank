import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EschatBankComponent } from './eschat-bank.component';

describe('EschatBankComponent', () => {
  let component: EschatBankComponent;
  let fixture: ComponentFixture<EschatBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EschatBankComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EschatBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
