/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Course } from './Course';
import type { Lesson } from './Lesson';

export type Theme = {
    id?: number;
    title?: string | null;
    description?: string | null;
    course?: Course;
    lessons?: Array<Lesson> | null;
};
