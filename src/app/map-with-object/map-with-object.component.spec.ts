import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapWithObjectComponent } from './map-with-object.component';

describe('MapWithObjectComponent', () => {
  let component: MapWithObjectComponent;
  let fixture: ComponentFixture<MapWithObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapWithObjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapWithObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
