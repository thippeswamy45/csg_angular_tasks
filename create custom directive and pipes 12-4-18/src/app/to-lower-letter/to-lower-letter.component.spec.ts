import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToLowerLetterComponent } from './to-lower-letter.component';

describe('ToLowerLetterComponent', () => {
  let component: ToLowerLetterComponent;
  let fixture: ComponentFixture<ToLowerLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToLowerLetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToLowerLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
