import { Component, OnInit } from '@angular/core';
import { ExerciseCard } from "../../../../shared/components/exercise-card/exercise-card";
import { ExerciseService } from "../../../../core/services/exercise";
import { Exercise } from "../../../../core/models/exercise.model";

@Component({
  selector: 'app-exercise-list-page',
  imports: [ExerciseCard],
  templateUrl: './exercise-list-page.html',
  styleUrl: './exercise-list-page.scss',
})
export class ExerciseListPage implements OnInit {
  exercises: Exercise[] = [];

  constructor(private readonly exerciseService: ExerciseService) {}

  ngOnInit(): void {
    this.exerciseService.getExercises().subscribe({
      next: (exercises) => {
      console.log('Exercises loaded:', exercises);
        this.exercises = exercises.slice(0, 12); // Limit to 12 exercises
      },
      error: (error) => {
        console.error('Error loading exercises:', error);
      },
    });
  }
}

//PARA QUE SE OCUPA EL ONINIT?
