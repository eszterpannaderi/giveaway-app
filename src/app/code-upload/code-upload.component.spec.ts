import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeUploadComponent } from './code-upload.component';

describe('CodeUploadComponent', () => {
  let component: CodeUploadComponent;
  let fixture: ComponentFixture<CodeUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
