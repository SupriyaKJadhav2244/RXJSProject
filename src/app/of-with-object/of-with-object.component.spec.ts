import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfWithObjectComponent } from './of-with-object.component';

describe('OfWithObjectComponent', () => {
  let component: OfWithObjectComponent;
  let fixture: ComponentFixture<OfWithObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfWithObjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfWithObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
