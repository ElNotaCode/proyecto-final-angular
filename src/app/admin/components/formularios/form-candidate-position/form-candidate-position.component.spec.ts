import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCandidatePositionComponent } from './form-candidate-position.component';

describe('FormCandidatePositionComponent', () => {
  let component: FormCandidatePositionComponent;
  let fixture: ComponentFixture<FormCandidatePositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCandidatePositionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCandidatePositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
