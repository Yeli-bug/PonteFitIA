import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseFilters } from './exercise-filters';

describe('ExerciseFilters', () => {
  let component: ExerciseFilters;
  let fixture: ComponentFixture<ExerciseFilters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciseFilters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseFilters);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
