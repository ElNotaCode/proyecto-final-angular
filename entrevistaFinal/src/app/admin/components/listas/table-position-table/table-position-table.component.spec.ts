import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePositionTableComponent } from './table-position-table.component';

describe('TablePositionTableComponent', () => {
  let component: TablePositionTableComponent;
  let fixture: ComponentFixture<TablePositionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePositionTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablePositionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
