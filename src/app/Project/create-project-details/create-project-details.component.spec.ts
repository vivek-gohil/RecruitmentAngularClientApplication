import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProjectDetailsComponent } from './create-project-details.component';

describe('CreateProjectDetailsComponent', () => {
  let component: CreateProjectDetailsComponent;
  let fixture: ComponentFixture<CreateProjectDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProjectDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
