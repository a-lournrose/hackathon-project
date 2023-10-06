import { Course, Lesson, Theme } from '@lib/api/models';
import { createContext } from 'react';

interface IEducationContext {
  coursers: Course[];
  themes: Theme[];
  lessons: Lesson[];
  setCoursers: (value: Course[]) => void;
  setThemes: (value: Theme[]) => void;
  setLessons: (value: Lesson[]) => void;
}

export const EducationContext = createContext<IEducationContext>({
  coursers: [],
  lessons: [],
  themes: [],
  setCoursers: () => {},
  setLessons: () => {},
  setThemes: () => {},
});
