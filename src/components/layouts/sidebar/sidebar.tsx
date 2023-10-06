import React, { useContext } from 'react';
import { sidebarLinks } from '@components/layouts/misc/links';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { cn } from '@lib/utils/tools/cn';
import { AuthContext } from '@app/providers/auth';
import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar';
import { getFallback } from '@lib/utils/tools';
import Logo from '@assets/images/LOGO.svg';
import { RoutePaths } from '@app/router';
import { RouteKeys } from '@lib/constants';
import AvatarImageSrc from '@assets/images/Aavatar.png';

export const Sidebar = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const authContext = useContext(AuthContext);

  const handleClickLink = (route: string) => () => navigate(route);
  const onClickLogo = () => navigate(RoutePaths[RouteKeys.HOME]);

  return (
    <section className="custom-scrollbar leftsidebar">
      <div onClick={onClickLogo} className="cursor-pointer p-10">
        <img
          // className="h-[30px] md:h-[40px] w-[77px] md:w-[102px]"
          src={Logo}
          alt="logo"
          className="h-7"
        />
      </div>
      <div className="flex w-full flex-1 flex-1 flex-col gap-6 px-6">
        {sidebarLinks.map(link => {
          if (link.isPrivate && !authContext.isAuth) return null;
          const isActive = pathname == link.route;
          return (
            <div
              key={link.label}
              onClick={handleClickLink(link.route)}
              className={cn(
                'leftsidebar_link items-center [&>svg]:text-primary-500',
                isActive &&
                  'bg-primary-500 hover:bg-primary-500/90 [&>p]:text-white [&>svg]:text-white'
              )}
            >
              {link.icon}
              {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
              {/*@ts-ignore*/}
              <p className="text-black max-lg:hidden">{t(link.label)}</p>
            </div>
          );
        })}
      </div>
      {authContext.isAuth && (
        <div className="px-6 flex items-center gap-2">
          <Avatar>
            <AvatarImage src={AvatarImageSrc} />
            <AvatarFallback>{getFallback(authContext.user)}</AvatarFallback>
          </Avatar>
          <h3 className="text-black font-semibold text-lg text-body1-bold truncate">
            {authContext.user?.userInfo?.secondName}{' '}
            {(authContext.user?.userInfo?.firstName ?? '')[0]}.{' '}
            {(authContext.user?.userInfo?.thirdName ?? '')[0]}.
          </h3>
        </div>
      )}
      {/*<LogoutTrigger from="sidebar" />*/}
    </section>
  );
};
