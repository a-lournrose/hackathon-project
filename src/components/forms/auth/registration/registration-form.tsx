import React from 'react';
import { IAuthFormProps } from '@components/forms/auth/common/auth-interface';
import { z } from 'zod';
import { RegistrationSchema } from '@lib/utils/validations/registration-schema';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@components/ui/form';
import { Input } from '@components/ui/input';
import { DialogFooter } from '@components/ui/dialog';
import { Button } from '@components/ui/button';

interface IRegistrationFormProps
  extends IAuthFormProps<z.infer<typeof RegistrationSchema>> {}

export const RegistrationForm = (props: IRegistrationFormProps) => {
  const { t } = useTranslation();

  const form = useForm<z.infer<typeof RegistrationSchema>>({
    resolver: zodResolver(RegistrationSchema),
    defaultValues: {
      firstName: '',
      secondName: '',
      thirdName: '',
      username: '',
      password: '',
      passwordConfirm: '',
    },
  });

  const handleSubmit = async (fields: z.infer<typeof RegistrationSchema>) =>
    props.onSubmit(fields);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col justify-start gap-4"
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('ui:label.name')}</FormLabel>
              <FormControl>
                <Input
                  placeholder={t('ui:placeholder.enter')}
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="secondName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Фамилия</FormLabel>
              <FormControl>
                <Input
                  placeholder={t('ui:placeholder.enter')}
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="thirdName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Отчество</FormLabel>
              <FormControl>
                <Input
                  placeholder={t('ui:placeholder.enter')}
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Почта</FormLabel>
              <FormControl>
                <Input placeholder={t('ui:placeholder.enter')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('ui:label.password')}</FormLabel>
              <FormControl>
                <Input
                  placeholder={t('ui:placeholder.enter')}
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="passwordConfirm"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('ui:label.password_confirm')}</FormLabel>
              <FormControl>
                <Input
                  placeholder={t('ui:placeholder.enter')}
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {props.extraFromContent}
        <DialogFooter>
          <Button
            data={{ isLoading: props.isLoading }}
            className="mt-5"
            variant="primary"
            type="submit"
          >
            {t('ui:button.sign_up')}
          </Button>
        </DialogFooter>
      </form>
    </Form>
  );
};
