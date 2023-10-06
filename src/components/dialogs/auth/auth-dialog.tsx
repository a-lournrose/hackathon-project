import type { IBaseDialogProps } from '@components/dialogs/base';
import { DialogAdapter } from '@components/dialogs/base';
import { LoginForm, RegistrationForm } from '@components/forms/auth';

import Logo from '../../../assets/images/LOGO.svg';
import { useContext, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';
import { LoginSchema } from '@lib/utils/validations/login-schema';
import {
  LoginExtraContent,
  RegistrationExtraContent,
} from '@components/dialogs/auth/misc';
import { RegistrationSchema } from '@lib/utils/validations/registration-schema';
import { toast } from '@components/ui/use-toast';
import { api } from '@lib/api/plugins';
import { LocaleStorageKeys } from '@lib/constants';
import { AuthContext } from '@app/providers/auth';
import { RegistrationResponseDto } from '@lib/api/types/registration-response-dto';
import { LoginResponseDto } from '@lib/api/types/login-response-dto';
import { RegistrationRequestDto } from '@lib/api/models';
import { useNavigate } from 'react-router-dom';

type AuthStrategyType = 'login' | 'registration';

interface IAuthDialogProps extends IBaseDialogProps {
  strategy?: AuthStrategyType;
  onlyForTeacher?: boolean;
}

export const AuthDialog = (props: IAuthDialogProps) => {
  const { t } = useTranslation();
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const [authStrategy, setAuthStrategy] = useState<AuthStrategyType>(
    props.onlyForTeacher ? 'registration' : props.strategy ?? 'login'
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isWrongCredentials, setIsWrongCredentials] = useState<boolean>(false);

  const handleLoginSuccess = (response: LoginResponseDto) => {
    authContext.setAccessToken(response.token);
    localStorage.setItem(LocaleStorageKeys.JWT, response.token);
    toast({
      variant: 'success',
      title: t('toast:success.auth_success'),
    });
    handleOpenChange(false);
  };

  const handleRegistrationSuccess = (response: RegistrationResponseDto) => {
    authContext.setUser(response.account);
    authContext.setAccessToken(response.token);
    localStorage.setItem(LocaleStorageKeys.JWT, response.token);
    toast({
      variant: 'success',
      title: t('toast:success.registration_success'),
    });
    handleOpenChange(false);
    navigate('/');
  };

  const handleAuthError = () => {
    if (authStrategy == 'login') setIsWrongCredentials(true);
    else
      toast({
        variant: 'destructive',
        title: t('toast:error.default'),
      });
  };

  const handleLogin = async (dto: z.infer<typeof LoginSchema>) => {
    setIsWrongCredentials(false);
    setIsLoading(true);
    const res = await api.auth.login(dto, handleLoginSuccess, handleAuthError);
    setIsLoading(false);
    res && navigate('/');
  };

  const handleRegistration = async (
    dto: z.infer<typeof RegistrationSchema>
  ) => {
    setIsLoading(true);
    if ('passwordConfirm' in dto)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      delete dto.passwordConfirm;
    await api.registration.registration(
      {
        ...dto,
        role: props.onlyForTeacher ? 'Teacher' : 'Student',
      } as RegistrationRequestDto,
      handleRegistrationSuccess,
      handleAuthError
    );
    setIsLoading(false);
  };

  const handleSetAuthStrategy = (strategy: AuthStrategyType) => () =>
    setAuthStrategy(strategy);

  const dialogTitle = useMemo(() => {
    switch (authStrategy) {
      case 'login':
        return t('ui:title.sign_in');
      case 'registration':
        return t('ui:title.sign_up');
    }
  }, [authStrategy]);

  useEffect(() => {
    return () => setIsLoading(false);
  }, []);

  const handleOpenChange = (open: boolean) => {
    if (open) setIsLoading(false);
    props.onOpenChange(open);
  };

  return (
    <DialogAdapter
      isOpen={props.isOpen}
      onOpenChange={handleOpenChange}
      title={dialogTitle as string}
      noClosable
    >
      <div className="flex w-full justify-center mt-5">
        <img src={Logo} alt="logo" className="w-40" />
      </div>
      {!props.onlyForTeacher && authStrategy == 'login' && (
        <>
          <LoginForm
            extraFromContent={
              <LoginExtraContent
                isWrongCredentials={isWrongCredentials}
                onClick={handleSetAuthStrategy('registration')}
              />
            }
            isLoading={isLoading}
            onSubmit={handleLogin}
          />
        </>
      )}
      {authStrategy == 'registration' && (
        <RegistrationForm
          extraFromContent={
            !props.onlyForTeacher && (
              <RegistrationExtraContent
                onClick={handleSetAuthStrategy('login')}
              />
            )
          }
          isLoading={isLoading}
          onSubmit={handleRegistration}
        />
      )}
    </DialogAdapter>
  );
};
