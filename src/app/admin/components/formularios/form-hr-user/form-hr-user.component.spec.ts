import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHrUserComponent } from './form-hr-user.component';

describe('FormHrUserComponent', () => {
  let component: FormHrUserComponent;
  let fixture: ComponentFixture<FormHrUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormHrUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormHrUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
