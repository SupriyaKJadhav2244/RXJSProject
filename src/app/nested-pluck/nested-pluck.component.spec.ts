import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedPluckComponent } from './nested-pluck.component';

describe('NestedPluckComponent', () => {
  let component: NestedPluckComponent;
  let fixture: ComponentFixture<NestedPluckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedPluckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedPluckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
