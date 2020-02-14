import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmployeeRolesComponent } from './list-employee-roles.component';

describe('ListEmployeeRolesComponent', () => {
  let component: ListEmployeeRolesComponent;
  let fixture: ComponentFixture<ListEmployeeRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEmployeeRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmployeeRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
