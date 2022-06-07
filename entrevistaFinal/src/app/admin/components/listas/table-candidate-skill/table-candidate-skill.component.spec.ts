import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCandidateSkillComponent } from './table-candidate-skill.component';

describe('TableCandidateSkillComponent', () => {
  let component: TableCandidateSkillComponent;
  let fixture: ComponentFixture<TableCandidateSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCandidateSkillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableCandidateSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
