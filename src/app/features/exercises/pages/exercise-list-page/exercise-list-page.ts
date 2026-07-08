import { Component, OnInit } from '@angular/core';
import { ExerciseCard } from "../../../../shared/components/exercise-card/exercise-card";
import { ExerciseService } from "../../../../core/services/exercise";
import { Exercise } from "../../../../core/models/exercise.model";
import { ExerciseFilters } from '../../components/exercise-filters/exercise-filters';

@Component({
  selector: 'app-exercise-list-page',
  imports: [ExerciseCard, ExerciseFilters],
  templateUrl: './exercise-list-page.html',
  styleUrl: './exercise-list-page.scss',
})
export class ExerciseListPage implements OnInit {
  exercises: Exercise[] = [];
  filteredExercises: Exercise[] = [];

  constructor(private readonly exerciseService: ExerciseService) {}

  onSearchChange(searchTerm: string) {
  const normalizedSearch = searchTerm.toLowerCase().trim();

  this.filteredExercises = this.exercises.filter((exercise) =>
    exercise.name.toLowerCase().includes(normalizedSearch)
  );
}

  ngOnInit(): void {
    this.exerciseService.getExercises().subscribe((exercises) => {
      this.exercises = exercises;
      this.filteredExercises = exercises;
    });
  }
}

//PARA QUE SE OCUPA EL ONINIT?
