import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHrPositionComponent } from './form-hr-position.component';

describe('FormHrPositionComponent', () => {
  let component: FormHrPositionComponent;
  let fixture: ComponentFixture<FormHrPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormHrPositionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormHrPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
