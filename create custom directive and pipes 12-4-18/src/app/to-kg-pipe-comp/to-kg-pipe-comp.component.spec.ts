import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToKgPipeCompComponent } from './to-kg-pipe-comp.component';

describe('ToKgPipeCompComponent', () => {
  let component: ToKgPipeCompComponent;
  let fixture: ComponentFixture<ToKgPipeCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToKgPipeCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToKgPipeCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
