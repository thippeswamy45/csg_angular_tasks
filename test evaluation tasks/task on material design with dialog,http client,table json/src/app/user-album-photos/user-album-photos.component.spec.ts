import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAlbumPhotosComponent } from './user-album-photos.component';

describe('UserAlbumPhotosComponent', () => {
  let component: UserAlbumPhotosComponent;
  let fixture: ComponentFixture<UserAlbumPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAlbumPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAlbumPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
