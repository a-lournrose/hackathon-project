import React from 'react';

import { Button } from '@components/ui/button';
import { AnswerDto as AnswerComponent } from '@components/modules/examination-constructor/components/answer';
import { FiPlus } from 'react-icons/fi';
import { AnswerDto } from '../mock/types';

interface IAnswerGeneratorProps {
  questionId: number;
  disabled?: boolean;
  answers: AnswerDto[];
  onAddEmptyAnswer: (questionId: number) => void;
  onChangeAnswerIsRight: (
    newValue: boolean,
    questionId: number,
    answerId: number
  ) => void;
  onChangeAnswerName: (
    newValue: string,
    questionId: number,
    answerId: number
  ) => void;
  onDeleteAnswer: (questionId: number, answerId: number) => void;
}

export const AnswerGenerator = (props: IAnswerGeneratorProps) => {
  const handleChangeAnswerIsRight = (newValue: boolean, id: number) =>
    props.onChangeAnswerIsRight(newValue, props.questionId, id);

  const handleChangeAnswerName = (newValue: string, id: number): void =>
    props.onChangeAnswerName(newValue, props.questionId, id);

  const handleDeleteAnswer = (id: number) =>
    props.onDeleteAnswer(props.questionId, id);

  const isDisabledAddNewAnswer = () =>
    props.answers.length == 0
      ? false
      : !props.answers[props.answers.length - 1]?.title?.trim().length;

  const handleAddEmptyAnswer = () => props.onAddEmptyAnswer(props.questionId);

  return (
    <div className="w-full flex flex-col gap-1 justify-start items-start">
      {props.answers.map(item => (
        <AnswerComponent
          key={item.id}
          answerId={item.id}
          isRight={item.isRight}
          name={item.title}
          onDelete={handleDeleteAnswer}
          onChangeIsRight={handleChangeAnswerIsRight}
          onChangeName={handleChangeAnswerName}
        />
      ))}
      <Button
        size="icon"
        variant="ghost"
        onClick={handleAddEmptyAnswer}
        disabled={isDisabledAddNewAnswer() || props.disabled}
      >
        <FiPlus size={18} />
      </Button>
    </div>
  );
};
