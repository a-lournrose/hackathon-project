import { createContext } from 'react';
import { LocaleStorageKeys } from '@lib/constants';
import { Account, Role } from '@lib/api/models';

interface IAuthContext {
  isAuth?: boolean;
  isAuthWithInfo?: boolean;
  accessToken?: string;
  setAccessToken: (token?: string) => void;
  role?: string;
  user?: Account;
  setUser: (user?: Account) => void;
}

export const AuthContext = createContext<IAuthContext>({
  isAuth: false,
  accessToken: localStorage.getItem(LocaleStorageKeys.JWT) ?? undefined,
  setAccessToken: () => {},
  setUser: () => {},
});
