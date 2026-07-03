import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Exercise } from '../../../core/models/exercise.model';
import { CapitalizePipe } from '../../pipes/capitalize-pipe';

@Component({
  selector: 'app-exercise-card',
  imports: [
    MatButtonModule,
    MatCardModule,
    CapitalizePipe
  ],
  templateUrl: './exercise-card.html',
  styleUrl: './exercise-card.scss',
})
export class ExerciseCard {
    @Input({ required: true }) exercise!: Exercise;
}
