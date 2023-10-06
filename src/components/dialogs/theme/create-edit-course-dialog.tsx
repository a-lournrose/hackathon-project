import { DialogAdapter, IBaseDialogProps } from '@components/dialogs/base';
import { z } from 'zod';
import { ThemeSchema } from '@lib/utils/validations/theme-schema';
import { ThemeForm } from '@components/forms/theme/create-edit-theme-form';
import { Theme } from '@lib/api/models';
import { api } from '@lib/api/plugins';

type CourseDialogMode = 'edit' | 'create';

interface ICreateEditCourseDialogProps extends IBaseDialogProps {
  defaultValue?: Theme;
  mode: CourseDialogMode;
}
//TODO add models
export const CreateEditThemeDialog = (props: ICreateEditCourseDialogProps) => {
  const handleCreate = async (data: Theme) => {
    await api.theme.create(data);
  };

  const handleEdite = (data: Theme) => {
    switch (props.mode) {
      case 'edit':
    }
  };
  // TODO: после подключения танстака переинвалидировать кэш
  const handleSubmit = (data: Theme) => {
    switch (props.mode) {
      case 'edit':
        return handleEdite(data);
      case 'create':
        return handleCreate(data);
    }
    console.log(data);
  };

  return (
    <DialogAdapter
      isOpen={props.isOpen}
      onOpenChange={props.onOpenChange}
      title={props.mode == 'edit' ? 'Редактирование темы' : 'Создание темы'}
    >
      <ThemeForm
        onSubmit={handleSubmit}
        defaultValue={props.defaultValue as Theme}
      />
    </DialogAdapter>
  );
};
