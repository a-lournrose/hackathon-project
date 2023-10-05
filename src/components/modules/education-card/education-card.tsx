import CardPreview from '@assets/images/card-preview.png'
import { ICourse } from '@components/pages/home/mock/course';
import { Button } from '@components/ui/button';
import { useNavigate } from 'react-router-dom';
import { RoutePaths } from '@app/router';
import { RouteKeys } from '@lib/constants';

interface IEducationCardProps {
  item: ICourse
}

export const EducationCard = (props: IEducationCardProps) => {

  const navigate = useNavigate()
  const handleOpenEducationEntity = () => navigate(RoutePaths[RouteKeys.COURSE_ID])

  return (
    <div className="flex-1 bg-light-2 p-0 flex flex-col gap-0 rounded-lg overflow-hidden">
      <img src={CardPreview} alt='preview' />
      <div className="flex flex-col p-5 gap-2">
        <div className="flex flex-col gap-1">
          <h1>
            {props.item.title}
          </h1>
          <p>
            {props.item.description}
          </p>
        </div>
        <Button onClick={handleOpenEducationEntity} className="justify-self-end">
          Открыть
        </Button>
      </div>
    </div>
  );
};