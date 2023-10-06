import { DialogAdapter, IBaseDialogProps } from '@components/dialogs/base';
import { z } from 'zod';
import { ThemeSchema } from '@lib/utils/validations/theme-schema';
import { ThemeForm } from '@components/forms/theme/create-edit-theme-form';

type CourseDialogMode = 'edit' | 'create';

interface ICreateEditCourseDialogProps extends IBaseDialogProps {
  defaultValue?: z.infer<typeof ThemeSchema>;
  mode: CourseDialogMode;
}
//TODO add models
export const CreateEditThemeDialog = (props: ICreateEditCourseDialogProps) => {
  const handleCreate = (data: z.infer<typeof ThemeSchema>) => {
    console.log(data);
  };

  return (
    <DialogAdapter
      isOpen={props.isOpen}
      onOpenChange={props.onOpenChange}
      title={props.mode == 'edit' ? 'Редактирование темы' : 'Создание темы'}
    >
      <ThemeForm
        onSubmit={handleCreate}
        defaultValue={props.defaultValue as z.infer<typeof ThemeSchema>}
      />
    </DialogAdapter>
  );
};
