import { BrowserRouter } from 'react-router-dom';
import { IProviderProps } from '@app/providers/i-provider-props';
import { LocaleProvider } from '@app/providers/locale';
import { LocationHistoryProvider } from '@app/providers/location-history';
import { ErrorBoundaryProvider } from '@app/providers/error-boundary';
import { ThemeProvider } from '@app/providers/theme';
import { SetupApi } from '@app/providers/setup-api';
import { AuthProvider } from '@app/providers/auth';
import { PreloaderProvider } from '@app/providers/preloader';
import { Toaster } from '@components/ui/toaster';
import { QueryProvider } from '@app/providers/query/query-provider';
import { EducationProvider } from '@app/providers/education/education-provider';

export const RootProvider = (props: IProviderProps) => {
  return (
    <BrowserRouter>
      <QueryProvider>
        <ThemeProvider>
          <LocaleProvider>
            <LocationHistoryProvider>
              <EducationProvider>
                <PreloaderProvider>
                  <AuthProvider>
                    <SetupApi />
                    <Toaster />
                    <ErrorBoundaryProvider>
                      {props.children}
                    </ErrorBoundaryProvider>
                  </AuthProvider>
                </PreloaderProvider>
              </EducationProvider>
            </LocationHistoryProvider>
          </LocaleProvider>
        </ThemeProvider>
      </QueryProvider>
    </BrowserRouter>
  );
};
