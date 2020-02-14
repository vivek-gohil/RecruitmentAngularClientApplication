import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeeRolesComponent } from './create-employee-roles.component';

describe('CreateEmployeeRolesComponent', () => {
  let component: CreateEmployeeRolesComponent;
  let fixture: ComponentFixture<CreateEmployeeRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEmployeeRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployeeRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
