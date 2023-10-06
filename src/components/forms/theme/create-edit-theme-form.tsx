import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ThemeSchema } from '@lib/utils/validations/theme-schema';
import { IAuthFormProps } from '@components/forms/auth/common/auth-interface';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@components/ui/form';
import { Input } from '@components/ui/input';
import { Button } from '@components/ui/button';
import { DialogFooter } from '@components/ui/dialog';
import { Theme } from '@lib/api/models';

interface ICourseFormProps extends IAuthFormProps<Theme> {
  defaultValue?: Theme;
}

export const ThemeForm = (props: ICourseFormProps) => {
  const form = useForm<z.infer<typeof ThemeSchema>>({
    resolver: zodResolver(ThemeSchema),
    defaultValues: {
      title: props.defaultValue?.title ?? '',
      description: props.defaultValue?.description ?? '',
    },
  });

  const handleSubmit = async (fields: z.infer<typeof ThemeSchema>) =>
    props.onSubmit(fields);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col justify-start gap-4"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Название темы</FormLabel>
              <FormControl>
                <Input
                  placeholder="Введите название темы"
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
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Краткое описание</FormLabel>
              <FormControl>
                <Input placeholder="Введите описание" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <DialogFooter>
          <Button
            data={{ isLoading: props.isLoading }}
            className="mt-5 w-full"
            variant="primary"
            type="submit"
          >
            {props.defaultValue ? 'Сохранить' : 'Создать'}
          </Button>
        </DialogFooter>
      </form>
    </Form>
  );
};
