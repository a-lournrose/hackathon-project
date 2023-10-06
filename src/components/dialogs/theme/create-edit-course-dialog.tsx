import { DialogAdapter, IBaseDialogProps } from '@components/dialogs/base';
import { z } from 'zod';
import { ThemeSchema } from '@lib/utils/validations/theme-schema';
import { ThemeForm } from '@components/forms/theme/create-edit-theme-form';
import { Theme } from '@lib/api/models';
import { api, client } from '@lib/api/plugins';
import { useContext } from 'react';
import { EducationContext } from '@app/providers/education/education-context';
import { toast } from '@components/ui/use-toast';

type CourseDialogMode = 'edit' | 'create';

interface ICreateEditCourseDialogProps extends IBaseDialogProps {
  defaultValue?: Theme;
  mode: CourseDialogMode;
  id?: number;
}
//TODO add models
export const CreateEditThemeDialog = (props: ICreateEditCourseDialogProps) => {
  const educationContext = useContext(EducationContext);
  const handleCreate = async (data: Theme) => {
    educationContext.setThemes([
      ...educationContext.themes,
      {
        ...data,
        id: Math.max(...educationContext.themes.map(item => item.id)) + 1,
      },
    ]);
    toast({
      variant: 'success',
      title: 'Изменения сохранены!',
    });
    props.onOpenChange(false);
    // await api.theme.create({themeId: 0, ...data});
  };

  const handleEdite = async (data: Theme) => {
    educationContext.setThemes([
      ...educationContext.themes.map(item =>
        item.id == props.defaultValue.id ? { ...item, ...data } : item
      ),
    ]);
    toast({
      variant: 'success',
      title: 'Изменения сохранены!',
    });
    props.onOpenChange(false);
    // console.log(data)
    // switch (props.mode) {
    //   case 'edit':
    //     await client.put('/Theme', data);
    // }
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
