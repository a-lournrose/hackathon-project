import { RouteProps } from 'react-router-dom';
import { Role } from '@lib/api/models';
import { ReactNode } from 'react';
import { RouteKeys } from '@lib/constants';
import { WritePage } from '@components/pages/write';
import { HomePage } from '@components/pages/home/home-page';
import { UserPage } from '@components/pages/user';
import { LatestPage } from '@components/pages/latest';
import { MapPage } from '@components/pages/map';
import { CoursePage } from '@components/pages/course/course-page';
import { ThemePage } from '@components/pages/theme/theme-page';
import { GradePage } from '@components/pages/grade';

export type RoutePropsType = RouteProps & {
  isPrivate: boolean;
  requiredRole?: Role;
  Layout?: ReactNode;
};

export const RoutePaths = {
  [RouteKeys.HOME]: '/',
  [RouteKeys.SUBSCRIPTIONS]: '/subscriptions',
  [RouteKeys.LATEST]: '/latest',
  [RouteKeys.COMPANY]: '/company',
  [RouteKeys.COMPANY_ID]: '/company/:id',
  [RouteKeys.VACANCY]: '/vacancy',
  [RouteKeys.VACANCY_ID]: '/vacancy/:id',
  [RouteKeys.USER]: '/user',
  [RouteKeys.USER_ID]: '/user/:id',
  [RouteKeys.ARTICLE_ID]: '/article/:id',
  [RouteKeys.WRITE]: '/write',
  [RouteKeys.MAP]: '/map',
  [RouteKeys.COURSE_ID]: '/course/:id',
  [RouteKeys.THEME_ID]: '/theme/:id',
  [RouteKeys.LESSON_ID]: '/lesson/:id',
  [RouteKeys.AUTH]: '/auth',
  [RouteKeys.GRADE]: '/grade',
};

export const routerConfig: RoutePropsType[] = [
  {
    isPrivate: false,
    path: RoutePaths[RouteKeys.HOME],
    element: <HomePage />,
  },
  {
    isPrivate: false,
    path: RoutePaths[RouteKeys.COURSE_ID],
    element: <CoursePage />,
  },
  {
    isPrivate: false,
    path: RoutePaths[RouteKeys.THEME_ID],
    element: <ThemePage />,
  },
  {
    isPrivate: true,
    path: RoutePaths[RouteKeys.LESSON_ID],
    element: <div>dasdasdasd</div>,
  },
  {
    isPrivate: false,
    path: RoutePaths[RouteKeys.GRADE],
    element: <GradePage />,
  },
  {
    isPrivate: false,
    path: RoutePaths[RouteKeys.MAP],
    element: <MapPage />,
  },
  {
    isPrivate: true,
    path: RoutePaths[RouteKeys.SUBSCRIPTIONS],
    element: <div>SUBSCRIPTIONS</div>,
  },
  {
    isPrivate: false,
    path: RoutePaths[RouteKeys.LATEST],
    element: <LatestPage />,
  },
  {
    isPrivate: false,
    path: RoutePaths[RouteKeys.COMPANY],
    element: <div>COMPANY</div>,
  },
  {
    isPrivate: false,
    path: RoutePaths[RouteKeys.COMPANY_ID],
    element: <div>COMPANY_ID</div>,
  },
  {
    isPrivate: false,
    path: RoutePaths[RouteKeys.VACANCY],
    element: <div>VACANCY</div>,
  },
  {
    isPrivate: false,
    path: RoutePaths[RouteKeys.VACANCY_ID],
    element: <div>VACANCY_ID</div>,
  },
  {
    isPrivate: false,
    path: RoutePaths[RouteKeys.USER],
    element: <UserPage />,
  },
  {
    isPrivate: false,
    path: RoutePaths[RouteKeys.USER_ID],
    element: <div>USER_ID</div>,
  },
  {
    isPrivate: false,
    path: RoutePaths[RouteKeys.ARTICLE_ID],
    element: <div>PUBLICATION_ID</div>,
  },
  {
    isPrivate: true,
    path: RoutePaths[RouteKeys.WRITE],
    element: <WritePage />,
  },
];
