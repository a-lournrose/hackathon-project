import { DialogAdapter, IBaseDialogProps } from '@components/dialogs/base';
import { CourseForm } from '@components/forms/course/course-form';
import { z } from 'zod';
import { CourseSchema } from '@lib/utils/validations/course-schema';
import { Course } from '@lib/api/models';
import { api } from '@lib/api/plugins';
import { useQueryClient } from '@tanstack/react-query';

type CourseDialogMode = 'edit' | 'create';

interface ICreateEditCourseDialogProps extends IBaseDialogProps {
  defaultValue?: Course;
  mode: CourseDialogMode;
}
//TODO add models
export const CreateEditCourseDialog = (props: ICreateEditCourseDialogProps) => {
  const queryClient = useQueryClient();

  const handleSuccessSubmitAction = () =>
    queryClient.invalidateQueries(['all-courses', 'my-courses']);

  const handleUpdateCourse = (data: Course) => {
    const dto = {
      ...props.defaultValue,
      ...data,
    };
    handleSuccessSubmitAction();
  };

  const handleCreateCourse = (data: Course) => {
    //api.course.create(data);
    handleSuccessSubmitAction();
  };

  const handleSubmit = (data: Course) => {
    switch (props.mode) {
      case 'create':
        return handleCreateCourse(data);
      case 'edit':
        return handleUpdateCourse(data);
    }
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
        onSubmit={handleSubmit}
        defaultValue={props.defaultValue as z.infer<typeof CourseSchema>}
      />
    </DialogAdapter>
  );
};
