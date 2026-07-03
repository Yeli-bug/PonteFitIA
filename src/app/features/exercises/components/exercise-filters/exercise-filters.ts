import { Component, output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-exercise-filters',
  imports: [MatFormFieldModule, MatInputModule],
  templateUrl: './exercise-filters.html',
  styleUrl: './exercise-filters.scss',
})
export class ExerciseFilters {
   searchChange = output<string>();

  onSearchChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchChange.emit(input.value);
  }
}
