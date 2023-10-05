import { useParams } from 'react-router-dom';

export const CoursePage = () => {
  const {id } = useParams<{id: string}>();

  return (
    <div>
      {id}
    </div>
  );
};