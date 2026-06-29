import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Exercise } from '../models/exercise.model';
import { ExerciseFilters } from '../models/exercise-filters.model';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  private readonly dataUrl = 'assets/data/exercises.json';
  private readonly imageBaseUrl = 'assets/exercises/'; //PARA QUE SIRVE ESTA LINEA?

  constructor(private readonly http: HttpClient) {} //PQ NO TIENE READONLY Y PARA Q SIRVE EL READONLY

  // Obtener la lista de ejercicios desde la API
  getExercises(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(this.dataUrl);
  }

  getExerciseImage(imagePath: string): string {
    return `${this.imageBaseUrl}${imagePath}`;
  }

  getExercisesByMuscle(muscle: string): Observable<Exercise[]> {
    return this.getExercises().pipe(
      map((exercises) =>
        exercises.filter((exercise) => exercise.primaryMuscles.includes(muscle))),
    );
  }

  getExercisesByLevel(level: string): Observable<Exercise[]> {
    return this.getExercises().pipe(
      map((exercises) =>
        exercises.filter(exercise => exercise.level === level)),
    );
  }

  getExercisesByEquipment(equipment: string): Observable<Exercise[]>{
    return this.getExercises().pipe(
      map((exercises) =>
        exercises.filter(exercise => exercise.equipment === equipment)),
    );
  }

  getExercisesByFilter(filters: ExerciseFilters): Observable<Exercise[]>{
    return this.getExercises().pipe(
      map((exercises) => exercises.filter((exercise) => {
        const levelMatch = filters.level ? exercise.level === filters.level : true;
        const equipmentMatch = filters.equipment ? exercise.equipment === filters.equipment : true;
        const muscleMatch = filters.muscle ? exercise.primaryMuscles.includes(filters.muscle) : true;
        return levelMatch && equipmentMatch && muscleMatch;
      }))
    );
  }

}
// this.getExercises() → obtiene todos los ejercicios.
// pipe() → transforma el resultado.
// map() → recibe el arreglo completo.
// filter() → deja solo los ejercicios que cumplen la condición.
