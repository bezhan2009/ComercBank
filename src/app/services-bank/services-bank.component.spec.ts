import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesBankComponent } from './services-bank.component';

describe('ServicesBankComponent', () => {
  let component: ServicesBankComponent;
  let fixture: ComponentFixture<ServicesBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesBankComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicesBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
