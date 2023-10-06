import { DialogAdapter, IBaseDialogProps } from '@components/dialogs/base';
import { CourseForm } from '@components/forms/course/course-form';
import { z } from 'zod';
import { CourseSchema } from '@lib/utils/validations/course-schema';
import { Course } from '@lib/api/models';
import { api, client } from '@lib/api/plugins';
import { useQueryClient } from '@tanstack/react-query';
import { useContext, useEffect, useState } from 'react';
import { EducationContext } from '@app/providers/education/education-context';
import { toast } from '@components/ui/use-toast';

type CourseDialogMode = 'edit' | 'create';

interface ICreateEditCourseDialogProps extends IBaseDialogProps {
  defaultValue?: Course;
  mode: CourseDialogMode;
  id?: number;
}
//TODO add models
export const CreateEditCourseDialog = (props: ICreateEditCourseDialogProps) => {
  const [courseInfo, setCourseInfo] = useState({});
  const educationContext = useContext(EducationContext);

  const queryClient = useQueryClient();

  const handleSuccessSubmitAction = () =>
    queryClient.invalidateQueries(['all-courses', 'my-courses']);

  const handleUpdateCourse = async (data: Course) => {
    console.log(7777);
    educationContext.setCoursers([
      ...educationContext.coursers.map(item =>
        item.id == props.defaultValue.id ? { ...item, ...data } : item
      ),
    ]);
    toast({
      variant: 'success',
      title: 'Изменения сохранены!',
    });
    props.onOpenChange(false);
    // const dto = {
    //   ...props.defaultValue,
    //   ...data,
    // };
    // await client.put('/Course', data);
    // handleSuccessSubmitAction();
  };

  const handleCreateCourse = async (data: Course) => {
    educationContext.setCoursers([
      ...educationContext.coursers,
      {
        ...data,
        id: Math.max(...educationContext.coursers.map(item => item.id)) + 1,
      },
    ]);
    toast({
      variant: 'success',
      title: 'Изменения сохранены!',
    });
    props.onOpenChange(false);
    // console.log(data);
    //
    // handleSuccessSubmitAction();
  };

  const handleSubmit = (data: Course) => {
    switch (props.mode) {
      case 'create':
        return handleCreateCourse(data);
      case 'edit':
        return handleUpdateCourse({ id: props.id, ...data });
    }
  };

  // useEffect(() => {
  //   if (props.mode === 'edit') {
  //     client.get(`/Course/${props.id}`).then(response => {
  //       setCourseInfo(response.data);
  //     });
  //   }
  // }, [props.mode]);

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
      <CourseForm onSubmit={handleSubmit} defaultValue={props.defaultValue} />
    </DialogAdapter>
  );
};
