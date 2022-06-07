import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHrUserComponent } from './table-hr-user.component';

describe('TableHrUserComponent', () => {
  let component: TableHrUserComponent;
  let fixture: ComponentFixture<TableHrUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableHrUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableHrUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
