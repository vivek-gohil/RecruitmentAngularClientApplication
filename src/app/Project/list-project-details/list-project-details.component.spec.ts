import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProjectDetailsComponent } from './list-project-details.component';

describe('ListProjectDetailsComponent', () => {
  let component: ListProjectDetailsComponent;
  let fixture: ComponentFixture<ListProjectDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProjectDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
