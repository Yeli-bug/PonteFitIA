import { Exercise } from './Exercise.model';

export interface Routine {
    name: string;
    exercises: RoutineExercise[];
    duration: number; // in minutes
    difficulty: string;
    equipment_needed: string[];
    instructions: string;
}

export interface RoutineExercise {
    exercise: Exercise;
    sets: number;
    repetitions: number;
}
