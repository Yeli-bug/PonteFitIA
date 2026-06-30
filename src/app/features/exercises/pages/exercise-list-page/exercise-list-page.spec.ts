import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseListPage } from './exercise-list-page';

describe('ExerciseListPage', () => {
  let component: ExerciseListPage;
  let fixture: ComponentFixture<ExerciseListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciseListPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseListPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
