import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHrPositionComponent } from './table-hr-position.component';

describe('TableHrPositionComponent', () => {
  let component: TableHrPositionComponent;
  let fixture: ComponentFixture<TableHrPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableHrPositionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableHrPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
