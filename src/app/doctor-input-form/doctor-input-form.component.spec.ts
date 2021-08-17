import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorInputFormComponent } from './doctor-input-form.component';

describe('DoctorInputFormComponent', () => {
  let component: DoctorInputFormComponent;
  let fixture: ComponentFixture<DoctorInputFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorInputFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
