import React, { useState } from 'react';
import { IProviderProps } from '@app/providers/i-provider-props';
import { Course, Lesson, Theme } from '@lib/api/models';
import { EducationContext } from '@app/providers/education/education-context';
import {
  themes as themesDefault,
  coursers as coursesDefault,
  lessons as lessonsDefault,
} from './mock/data';

export const EducationProvider = (props: IProviderProps) => {
  const [coursers, setCoursers] = useState<Course[]>(coursesDefault);
  const [themes, setThemes] = useState<Theme[]>(themesDefault);
  const [lessons, setLessons] = useState<Lesson[]>(lessonsDefault);
  return (
    <EducationContext.Provider
      value={{
        themes,
        coursers,
        setThemes,
        setLessons,
        lessons,
        setCoursers,
      }}
    >
      {props.children}
    </EducationContext.Provider>
  );
};
