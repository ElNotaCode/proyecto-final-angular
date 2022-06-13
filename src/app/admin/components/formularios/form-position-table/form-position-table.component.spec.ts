import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPositionTableComponent } from './form-position-table.component';

describe('FormPositionTableComponent', () => {
  let component: FormPositionTableComponent;
  let fixture: ComponentFixture<FormPositionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPositionTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPositionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
