import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Exercise } from '../../../core/models/exercise.model';

@Component({
  selector: 'app-exercise-card',
  imports: [
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './exercise-card.html',
  styleUrl: './exercise-card.scss',
})
export class ExerciseCard {
    @Input({ required: true }) exercise!: Exercise;
}
