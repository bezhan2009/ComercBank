import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequentlyTasksBankComponent } from './frequently-tasks-bank.component';

describe('FrequentlyTasksBankComponent', () => {
  let component: FrequentlyTasksBankComponent;
  let fixture: ComponentFixture<FrequentlyTasksBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrequentlyTasksBankComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrequentlyTasksBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
