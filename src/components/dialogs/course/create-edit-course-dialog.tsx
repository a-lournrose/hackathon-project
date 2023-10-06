import { DialogAdapter, IBaseDialogProps } from '@components/dialogs/base';
import { CourseForm } from '@components/forms/course/course-form';
import { z } from 'zod';
import { CourseSchema } from '@lib/utils/validations/course-schema';

type CourseDialogMode = 'edit' | 'create';

interface ICreateEditCourseDialogProps extends IBaseDialogProps {
  defaultValue?: z.infer<typeof CourseSchema>;
  mode: CourseDialogMode;
}
//TODO add models
export const CreateEditCourseDialog = (props: ICreateEditCourseDialogProps) => {
  const handleCreate = (data: z.infer<typeof CourseSchema>) => {
    console.log(data);
  };

  return (
    <DialogAdapter
      isOpen={props.isOpen}
      onOpenChange={props.onOpenChange}
      title={
        props.mode == 'edit'
          ? 'Редактирование программы'
          : 'Создание программы обучения'
      }
    >
      <CourseForm
        onSubmit={handleCreate}
        defaultValue={props.defaultValue as z.infer<typeof CourseSchema>}
      />
    </DialogAdapter>
  );
};
