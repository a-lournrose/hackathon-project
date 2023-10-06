import { FiHome, FiClock, FiClipboard, FiList, FiUsers } from 'react-icons/fi';
import React, { ReactNode } from 'react';
import { LuBuilding2 } from 'react-icons/lu';
import { RouteKeys } from '@lib/constants';
import { RoutePaths } from '@app/router';
import { BsGlobe } from 'react-icons/bs';
import { ImStatsDots } from 'react-icons/im';
import { MdDraw } from 'react-icons/md';

interface ISidebarLink {
  route: string;
  label: string;
  icon: ReactNode;
  isPrivate?: boolean;
}
export const sidebarLinks: ISidebarLink[] = [
  {
    route: RoutePaths[RouteKeys.HOME],
    label: 'Программы обучения',
    icon: <FiHome size={24} />,
  },
  {
    route: RoutePaths[RouteKeys.GRADE],
    label: 'Успеваемость',
    icon: <ImStatsDots size={24} />,
  },
  {
    route: RoutePaths[RouteKeys.MAP],
    label: 'Карта',
    icon: <BsGlobe size={24} />,
  },
  {
    route: RoutePaths[RouteKeys.DRAW],
    label: 'Рисование',
    icon: <MdDraw size={24} />,
  },
  {
    route: RoutePaths[RouteKeys.LATEST],
    label: 'ui:sidebar.latest',
    icon: <FiClock size={24} />,
  },
  {
    route: RoutePaths[RouteKeys.SUBSCRIPTIONS],
    label: 'ui:sidebar.subscriptions',
    icon: <FiList size={24} />,
    isPrivate: true,
  },
  {
    route: RoutePaths[RouteKeys.COMPANY],
    label: 'ui:sidebar.companies',
    icon: <LuBuilding2 size={24} />,
  },
  {
    route: RoutePaths[RouteKeys.VACANCY],
    label: 'ui:sidebar.vacancies',
    icon: <FiClipboard size={24} />,
  },
  {
    route: RoutePaths[RouteKeys.USER],
    label: 'ui:sidebar.users',
    icon: <FiUsers size={24} />,
  },
];
