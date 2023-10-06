/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Student } from './Student';
import type { Teacher } from './Teacher';
import type { Theme } from './Theme';

export type Course = {
    id?: number;
    title?: string | null;
    description?: string | null;
    teacher?: Teacher;
    students?: Array<Student> | null;
    themes?: Array<Theme> | null;
};
