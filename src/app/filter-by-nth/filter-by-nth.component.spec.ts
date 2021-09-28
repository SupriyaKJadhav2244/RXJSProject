import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByNthComponent } from './filter-by-nth.component';

describe('FilterByNthComponent', () => {
  let component: FilterByNthComponent;
  let fixture: ComponentFixture<FilterByNthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterByNthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterByNthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
