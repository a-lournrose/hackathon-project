import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { CourseSchema } from '@lib/utils/validations/course-schema';
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

interface ICourseFormProps
  extends IAuthFormProps<z.infer<typeof CourseSchema>> {
  defaultValue?: z.infer<typeof CourseSchema>;
}

export const CourseForm = (props: ICourseFormProps) => {
  const form = useForm<z.infer<typeof CourseSchema>>({
    resolver: zodResolver(CourseSchema),
    defaultValues: props.defaultValue ?? {
      title: '',
      description: '',
    },
  });

  const handleSubmit = async (fields: z.infer<typeof CourseSchema>) =>
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
              <FormLabel>Название курса</FormLabel>
              <FormControl>
                <Input
                  placeholder="Введите название курса"
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
            Сохранить
          </Button>
        </DialogFooter>
      </form>
    </Form>
  );
};
