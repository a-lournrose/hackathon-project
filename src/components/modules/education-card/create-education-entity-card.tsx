import React from 'react';
import CreateFrame from '@assets/images/create-education-entity.png';
import { EducationEntityType } from '@components/modules/education-card/education-entity-type';

interface ICreateEducationEntityCardProps {
  type: EducationEntityType;
  onClick: () => void;
}

export const CreateEducationEntityCard = (
  props: ICreateEducationEntityCardProps
) => {
  const gettextByEntityType = () => {
    switch (props.type) {
      case 'course':
        return 'Добавить курс';
      case 'theme':
        return 'Добавить тему';
      case 'lesson':
        return 'Добавить урок';
      default:
        return '';
    }
  };

  return (
    <div
      onClick={props.onClick}
      className="flex-1 transition-all min-w-[300px] bg-light-2 rounded-lg flex flex-col items-center justify-center border-2 border-transparent hover:border-primary-500"
    >
      <div className="flex flex-col gap-2 items-center">
        <img className="max-w-[90px]" src={CreateFrame} alt="create icon" />
        <h1 className="text-primary-500 text-heading3-semibold">
          {gettextByEntityType()}
        </h1>
      </div>
    </div>
  );
};
