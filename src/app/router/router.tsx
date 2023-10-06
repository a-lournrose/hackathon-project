import { Outlet, Route, Routes } from 'react-router-dom';
import { RootLayout } from '@components/layouts';
import { routerConfig } from '@app/router/config';
import { ProtectedRoute } from '@app/router/protected-route';
import { AuthPage } from '@components/pages/auth';

export const Router = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        {routerConfig.map(route => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <ProtectedRoute
                isPrivate={route.isPrivate}
                requiredRole={route.requiredRole}
              >
                {route.element}
              </ProtectedRoute>
            }
          />
        ))}
      </Route>
      <Route
        element={
          <div className="h-screen w-screen bg-white">
            <Outlet />
          </div>
        }
      >
        <Route path="/auth" element={<AuthPage />} />
      </Route>
    </Routes>
  );
};
