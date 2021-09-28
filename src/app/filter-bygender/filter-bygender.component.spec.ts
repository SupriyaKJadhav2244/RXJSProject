import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterBygenderComponent } from './filter-bygender.component';

describe('FilterBygenderComponent', () => {
  let component: FilterBygenderComponent;
  let fixture: ComponentFixture<FilterBygenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterBygenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterBygenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
