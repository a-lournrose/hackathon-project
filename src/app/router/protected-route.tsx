import { RoutePaths } from '@app/router/config';
import type { RoutePropsType } from '@app/router';
import { Navigate, useLocation } from 'react-router-dom';
import { LocaleStorageKeys, RouteKeys } from '@lib/constants';
import { ReactNode, useContext } from 'react';
import { AuthContext } from '@app/providers/auth';
import { PreloaderContext } from '@app/providers/preloader';

export const ProtectedRoute = (
  props: RoutePropsType & { children: ReactNode }
) => {
  const authContext = useContext(AuthContext);
  const preloader = useContext(PreloaderContext);

  const { pathname } = useLocation();

  if (authContext.isAuth && pathname.includes('auth'))
    return <Navigate to={RoutePaths[RouteKeys.HOME]} />;

  const isUnavailable =
    (props.isPrivate && !authContext.isAuth) ||
    (props.requiredRole && authContext.role == props.requiredRole);

  if (isUnavailable && !preloader.isVisible)
    return <Navigate to={RoutePaths[RouteKeys.AUTH]} />;

  return <>{props.children}</>;
};
