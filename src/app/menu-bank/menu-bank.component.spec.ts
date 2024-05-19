import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBankComponent } from './menu-bank.component';

describe('MenuBankComponent', () => {
  let component: MenuBankComponent;
  let fixture: ComponentFixture<MenuBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuBankComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
