import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSkillComponent } from './table-skill.component';

describe('TableSkillComponent', () => {
  let component: TableSkillComponent;
  let fixture: ComponentFixture<TableSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableSkillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
