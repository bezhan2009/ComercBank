import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsArchivesBankComponent } from './documents-archives-bank.component';

describe('DocumentsArchivesBankComponent', () => {
  let component: DocumentsArchivesBankComponent;
  let fixture: ComponentFixture<DocumentsArchivesBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentsArchivesBankComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocumentsArchivesBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
