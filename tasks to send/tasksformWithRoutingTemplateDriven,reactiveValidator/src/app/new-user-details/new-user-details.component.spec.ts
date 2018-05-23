import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserDetailsComponent } from './new-user-details.component';

describe('NewUserDetailsComponent', () => {
  let component: NewUserDetailsComponent;
  let fixture: ComponentFixture<NewUserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewUserDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
