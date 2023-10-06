/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Course } from './Course';
import type { UserInfo } from './UserInfo';

export type Teacher = {
    id?: number;
    userInfo?: UserInfo;
    courses?: Array<Course> | null;
};
