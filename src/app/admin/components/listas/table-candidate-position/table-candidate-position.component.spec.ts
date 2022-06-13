import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCandidatePositionComponent } from './table-candidate-position.component';

describe('TableCandidatePositionComponent', () => {
  let component: TableCandidatePositionComponent;
  let fixture: ComponentFixture<TableCandidatePositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCandidatePositionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableCandidatePositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
