import CardPreview from '@assets/images/card-preview.png'
import { ICourse } from '@components/pages/home/mock/course';
import { Button } from '@components/ui/button';
import { useNavigate } from 'react-router-dom';

interface IEducationCardProps {
  item: ICourse
}

export const EducationEntityCard = (props: IEducationCardProps) => {

  const navigate = useNavigate()
  const handleOpenEducationEntity = () => navigate('/course/' + 1)

  return (
    <div className="flex-1 min-w-[300px] bg-light-2 p-0 flex flex-col gap-0 rounded-lg overflow-hidden">
      <img src={CardPreview} alt='preview' />
      <div className="flex flex-col p-5 gap-2">
        <div className="flex flex-col gap-1">
          <h1 className="text-desc text-heading3-semibold" >
            {props.item.title}
          </h1>
          <p className="text-desc text-small-medium">
            {props.item.description}
          </p>
        </div>
        <Button onClick={handleOpenEducationEntity} variant="primary" className="justify-self-end mt-2">
          Открыть
        </Button>
      </div>
    </div>
  );
};