import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifsBankComponent } from './tarifs-bank.component';

describe('TarifsBankComponent', () => {
  let component: TarifsBankComponent;
  let fixture: ComponentFixture<TarifsBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarifsBankComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TarifsBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
