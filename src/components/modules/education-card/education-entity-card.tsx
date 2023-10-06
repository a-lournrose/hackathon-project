import CardPreview from '@assets/images/card-preview.png';
import CardPreview2 from '@assets/images/card-preview2.png';
import CardPreview3 from '@assets/images/card-preview3.png';
import { Button } from '@components/ui/button';
import { useNavigate } from 'react-router-dom';
import { EducationEntityType } from '@components/modules/education-card/education-entity-type';

interface IEducationCardProps {
  id: number;
  title: string;
  description?: string;
  type: EducationEntityType;
}

export const EducationEntityCard = (props: IEducationCardProps) => {
  const navigate = useNavigate();
  const handleOpenEducationEntity = () => {
    switch (props.type) {
      case 'course':
        return navigate('/course/' + props.id);
      case 'theme':
        return navigate('/theme/' + props.id);
      case 'lesson':
        navigate('/lesson/' + props.id);
    }
  };

  const handleGetPreview = () => {
    switch (props.type) {
      case 'course':
        return CardPreview;
      case 'theme':
        return CardPreview2;
      case 'lesson':
        return CardPreview3;
    }
  };

  return (
    <div className="flex-1 max-w-[48%] min-w-[300px] bg-light-2 p-0 flex flex-col gap-0 rounded-lg overflow-hidden">
      <img src={handleGetPreview()} alt="preview" />
      <div className="flex flex-col p-5 gap-2">
        <div className="flex flex-col gap-1">
          <h1 className="text-desc text-heading3-semibold">{props.title}</h1>
          {props.description && (
            <p className="text-desc text-small-medium">{props.description}</p>
          )}
        </div>
        <Button
          onClick={handleOpenEducationEntity}
          variant="primary"
          className="justify-self-end mt-2"
        >
          Открыть
        </Button>
      </div>
    </div>
  );
};
