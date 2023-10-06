/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserInfo } from './UserInfo';

export type Account = {
    id?: number;
    username?: string | null;
    password?: string | null;
    refreshToken?: string | null;
    refreshTokenExpiryTime?: string;
    userInfo?: UserInfo;
};
