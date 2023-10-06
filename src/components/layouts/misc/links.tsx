import { FiHome } from 'react-icons/fi';
import React, { ReactNode } from 'react';
import { RouteKeys } from '@lib/constants';
import { RoutePaths } from '@app/router';
import { ImStatsDots } from 'react-icons/im';
import { BsMap } from 'react-icons/bs';
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
    icon: <BsMap size={24} />,
  },
  {
    route: RoutePaths[RouteKeys.DRAW],
    label: 'Рисование',
    icon: <MdDraw size={24} />,
  }
];
