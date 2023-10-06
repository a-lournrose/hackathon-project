/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Course } from './Course';
import type { StudentTestPercent } from './StudentTestPercent';
import type { UserInfo } from './UserInfo';

export type Student = {
    id?: number;
    user?: UserInfo;
    courses?: Array<Course> | null;
    studentTestPercents?: Array<StudentTestPercent> | null;
};
