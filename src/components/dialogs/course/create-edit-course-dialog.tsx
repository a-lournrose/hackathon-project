import { IBaseDialogProps } from '@components/dialogs/base';

type CourseDialogMode = 'edit' | 'create'

interface ICreateEditCourseDialogProps extends IBaseDialogProps {
  defaultValue?: object;
  mode: CourseDialogMode
}

export const CreateEditCourseDialog = (props: ICreateEditCourseDialogProps) => {

  const handleCreate = () => {}

  return (
    <div>

    </div>
  );
};