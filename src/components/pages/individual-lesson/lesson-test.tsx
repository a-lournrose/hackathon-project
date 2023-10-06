import React, { FC, useEffect, useState } from 'react';
import FlippingContainer from '@components/shared/flipping-container/flipping-container';
import { LessonContainer } from '@components/shared/lesson-container/lesson-container';
import TestItemCard from '@components/modules/test-item-card/test-item-card';
import { QuestionDto } from '@components/modules/examination-constructor/mock/types';
import { useNavigate } from 'react-router-dom';
import { toast } from '@components/ui/use-toast';

interface ILessonTest {
  questions: QuestionDto[];
}

export const LessonTest: FC<ILessonTest> = ({ questions }) => {
  const navigate = useNavigate();
  const [questionsState, setQuestionsState] =
    useState<QuestionDto[]>(questions);

  useEffect(() => {
    setQuestionsState(prev =>
      prev.map(question => {
        return {
          ...question,
          answers: question.answers.map(answer => {
            return {
              ...answer,
              isRight: false,
            };
          }),
        };
      })
    );
  }, []);

  const onFinish = () => {
    let good = true;
    let thuethValues = [];
    let studentValues = [];

    questions.forEach(question => {
      question.answers.forEach(answer => {
        thuethValues.push(answer.isRight);
      });
    });

    questionsState.forEach(question => {
      question.answers.forEach(answer => {
        studentValues.push(answer.isRight);
      });
    });

    for (let i = 0; i < thuethValues.length; i++) {
      if (thuethValues[i] !== studentValues[i]) {
        good = false;
        console.log('');
      }
    }

    navigate(-1);
    toast({
      title: good ? 'Тест успешно пройден' : 'Тест пройден с ошибками',
      variant: good ? 'success' : 'destructive',
    });
  };

  const onCheckedChange = entity => {
    setQuestionsState(prev =>
      prev.map(question => {
        if (question.id !== entity.questionId) {
          return question;
        } else {
          return {
            ...question,
            answers: question.answers.map(answer => {
              if (answer.questionId !== entity.answerId) {
                return answer;
              } else {
                return {
                  ...answer,
                  isRight: entity.checked,
                };
              }
            }),
          };
        }
      })
    );
  };

  const contents = questionsState.map((question, index) => (
    <TestItemCard question={question} onCheckedChange={onCheckedChange} />
  ));
  return (
    <LessonContainer>
      <div className="p-8">
        <FlippingContainer onFinish={onFinish} contents={contents} />
      </div>
    </LessonContainer>
  );
};
