import React, { FC } from 'react';
import { Checkbox } from '@components/ui/checkbox';
import { QuestionDto } from '@components/modules/examination-constructor/mock/types';

interface ICheckedChange {
  questionId: number;
  answerId: number;
  checked: boolean;
}

interface ITestItemCardProps {
  question: QuestionDto;
  onCheckedChange: ((newValue: ICheckedChange) => void)
}

const TestItemCard: FC<ITestItemCardProps> = ({question, onCheckedChange}) => {
  return (
    <div className='space-y-4'>
      <div className='text-heading2-semibold text-lime'>Вопрос №{question.id}</div>
      <div>{question.title}</div>
      {question.imageSrc && <div>
        <img src={question.imageSrc} alt='Image' className='h-[250px]' />
      </div>}
      <div>
        {question.answers.map(answer => <div className='flex items-center mb-2 space-x-2'>
          <Checkbox checked={answer.isRight}
                    id={String(answer.questionId)}
                    onCheckedChange={newValue => onCheckedChange({questionId: question.id, answerId: answer.questionId, checked: !!newValue})}/>
          <label
            htmlFor={String(answer.questionId)}
            className='text-base-regular'
          >
            {answer.title}
          </label>
        </div>)}
      </div>
    </div>
  );
};

export default TestItemCard;