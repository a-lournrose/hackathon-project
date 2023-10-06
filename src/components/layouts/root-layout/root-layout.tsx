import { ReactNode, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from '@components/layouts/sidebar';
import { Bottombar } from '@components/layouts/bottombar';
import { cn } from '@lib/utils/tools';

interface IRootLayoutProps {
  children?: ReactNode;
}

export const RootLayout = (props: IRootLayoutProps) => {
  const location = useLocation();

  return (
    <>
      {/*<Topbar />*/}
      <main className="flex flex-row">
        <Sidebar />
        <section className="main-container">
          <div
            className={cn(
              'w-full',
              location.pathname != '/map' &&
                location.pathname != '/draw' &&
                'max-w-4xl'
            )}
          >
            {props.children ?? <Outlet />}
          </div>
        </section>
        {/*<RightSidebar/>*/}
      </main>
      <Bottombar />
    </>
  );
};
