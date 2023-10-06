import { useTranslation } from 'react-i18next';
import { ChangeEvent, useState } from 'react';
import { Input } from '@components/ui/input';
import { Button } from '@components/ui/button';
import { FiX } from 'react-icons/fi';
import { AnswerGenerator } from '@components/modules/examination-constructor/components/answer-generator';
import { AnswerDto } from '../mock/types';

interface IQuestionProps {
  questionId: number;
  name: string;
  answers: AnswerDto[];
  onChangeQuestionName: (newValue: string, id: number) => void;
  onDeleteQuestion: (id: number) => void;
  onAddEmptyAnswer: (questionId: number) => void;
  onChangeAnswerRight: (
    isRight: boolean,
    questionId: number,
    answerId: number
  ) => void;
  onChangeAnswerTitle: (
    newValue: string,
    questionId: number,
    answerId: number
  ) => void;
  onDeleteAnswer: (questionId: number, answerId: number) => void;
}

export const QuestionDto = (props: IQuestionProps) => {
  const { t } = useTranslation();

  const [isFocus, setIsFocus] = useState<boolean>(false);

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) =>
    props.onChangeQuestionName(event.target.value, props.questionId);

  return (
    <>
      <div className="flex items-center w-full">
        <Input
          value={props.name}
          onChange={handleChangeName}
          placeholder={t('ui:placeholder.come_up_question')}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
        />
        {!isFocus && (
          <Button
            size="icon"
            variant="ghost"
            onClick={() => props.onDeleteQuestion(props.questionId)}
          >
            <FiX size={18} />
          </Button>
        )}
      </div>
      <AnswerGenerator
        questionId={props.questionId}
        disabled={!props.name.trim().length}
        answers={props.answers}
        onAddEmptyAnswer={props.onAddEmptyAnswer}
        onChangeAnswerIsRight={props.onChangeAnswerRight}
        onChangeAnswerName={props.onChangeAnswerTitle}
        onDeleteAnswer={props.onDeleteAnswer}
      />
    </>
  );
};
