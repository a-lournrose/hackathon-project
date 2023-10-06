import { DialogAdapter, IBaseDialogProps } from '@components/dialogs/base';
import { CourseForm } from '@components/forms/course/course-form';
import { z } from 'zod';
import { CourseSchema } from '@lib/utils/validations/course-schema';
import { Course } from '@lib/api/models';
import { api, client } from '@lib/api/plugins';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

type CourseDialogMode = 'edit' | 'create';

interface ICreateEditCourseDialogProps extends IBaseDialogProps {
  defaultValue?: Course;
  mode: CourseDialogMode;
  id?: number;
}
//TODO add models
export const CreateEditCourseDialog = (props: ICreateEditCourseDialogProps) => {

  const [courseInfo, setCourseInfo] = useState({});

  const queryClient = useQueryClient();

  const handleSuccessSubmitAction = () =>
    queryClient.invalidateQueries(['all-courses', 'my-courses']);

  const handleUpdateCourse = async (data: Course) => {
    const dto = {
      ...props.defaultValue,
      ...data,
    };
    await client.put('/Course', data);
    handleSuccessSubmitAction();
  };

  const handleCreateCourse = async (data: Course) => {
    console.log(data);
    await api.course.create({themes: [], ...data});
    handleSuccessSubmitAction();
  };

  const handleSubmit = (data: Course) => {
    switch (props.mode) {
      case 'create':
        return handleCreateCourse(data);
      case 'edit':
        return handleUpdateCourse({id: props.id, ...data});
    }
  };

  useEffect(() => {
    if(props.mode === 'edit') {
      client.get(`/Course/${props.id}`).then(response => {
        setCourseInfo(response.data);
      })
    }
  }, [props.mode])

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
        defaultValue={props.mode === 'edit' ? courseInfo : props.defaultValue as z.infer<typeof CourseSchema>}
      />
    </DialogAdapter>
  );
};
