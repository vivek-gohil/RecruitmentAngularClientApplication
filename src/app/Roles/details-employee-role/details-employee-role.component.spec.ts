import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEmployeeRoleComponent } from './details-employee-role.component';

describe('DetailsEmployeeRoleComponent', () => {
  let component: DetailsEmployeeRoleComponent;
  let fixture: ComponentFixture<DetailsEmployeeRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsEmployeeRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsEmployeeRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
