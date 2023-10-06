import { useContext, useEffect, useMemo, useState } from 'react';
import { IProviderProps } from '@app/providers/i-provider-props';
import { api } from '@lib/api/plugins';
import { PreloaderContext } from '@app/providers/preloader';
import { AuthContext } from '@app/providers/auth/auth-context';
import { LocaleStorageKeys, QueryKeys } from '@lib/constants';
import { useQuery } from '@tanstack/react-query';
import { Account } from '@lib/api/models';

export const AuthProvider = (props: IProviderProps) => {
  const preloader = useContext(PreloaderContext);

  const [user, setUser] = useState<Account | undefined>(undefined);
  const [accessToken, setAccessToken] = useState<string | undefined>(
    localStorage.getItem(LocaleStorageKeys.JWT) ?? undefined
  );

  const handleSuccess = (user: Account) => setUser(user);

  const handleError = () => {
    localStorage.removeItem(LocaleStorageKeys.JWT);
    handleSetAccessToken(undefined);
  };

  const { isLoading, isFetching } = useQuery({
    queryKey: [QueryKeys.GET_ME],
    queryFn: async () => await api.account.getMe(handleSuccess, handleError),
    enabled: !user && !!accessToken,
    onSuccess: handleSuccess,
    onError: handleError,
  });

  const isAuth = useMemo(
    () => !!(accessToken ?? localStorage.getItem(LocaleStorageKeys.JWT)),
    [accessToken, user]
  );

  const isAuthWithInfo = useMemo(
    () =>
      !!(accessToken ?? localStorage.getItem(LocaleStorageKeys.JWT)) && !!user,
    [accessToken, user]
  );

  const role = useMemo(() => user?.userInfo?.role?.title ?? undefined, [user]);
  const handleSetAccessToken = (token?: string) => {
    setAccessToken(token);
    if (!token) localStorage.removeItem(LocaleStorageKeys.JWT);
  };

  useEffect(() => {
    preloader.setVisible(isFetching);
  }, [isFetching]);

  return (
    <AuthContext.Provider
      value={{
        isAuthWithInfo: isAuthWithInfo,
        isAuth,
        setUser,
        user,
        accessToken,
        role,
        setAccessToken: handleSetAccessToken,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
