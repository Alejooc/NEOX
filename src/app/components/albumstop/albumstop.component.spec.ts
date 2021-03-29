import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumstopComponent } from './albumstop.component';

describe('AlbumstopComponent', () => {
  let component: AlbumstopComponent;
  let fixture: ComponentFixture<AlbumstopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumstopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumstopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
