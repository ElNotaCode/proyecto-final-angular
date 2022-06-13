import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCandidateSkillComponent } from './form-candidate-skill.component';

describe('FormCandidateSkillComponent', () => {
  let component: FormCandidateSkillComponent;
  let fixture: ComponentFixture<FormCandidateSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCandidateSkillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCandidateSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
