import { ExaminationValidationErrorKeys } from '@components/modules/examination-constructor/constants';
import {
  AnswerDto,
  QuestionDto,
} from '@components/modules/examination-constructor/mock/types';

type PartialAnswers = Omit<AnswerDto, 'questionId' | 'id'>;
type PartialQuestions = Omit<
  QuestionDto,
  'examinationId' | 'id' | 'answers'
> & {
  answers: PartialAnswers[];
};

export const changeQuestionName = (
  prevQuestions: QuestionDto[],
  newName: string,
  id: number
): QuestionDto[] =>
  prevQuestions.map(item =>
    item.id == id ? { ...item, title: newName } : item
  );

export const deleteQuestion = (
  prevQuestions: QuestionDto[],
  questionId: number
): QuestionDto[] => prevQuestions.filter(item => item.id != questionId);

export const changeAnswersIsRight = (
  prevAnswers: AnswerDto[],
  isRight: boolean,
  id: number
): AnswerDto[] =>
  prevAnswers.map(item =>
    item.id == id ? { ...item, isRight: isRight } : item
  );

export const changeAnswerName = (
  prevAnswers: AnswerDto[],
  newName: string,
  id: number
): AnswerDto[] => {
  return prevAnswers.map(item =>
    item.id == id ? { ...item, title: newName } : item
  );
};

export const deleteAnswersByQuestionId = (
  questionId: number,
  questions: QuestionDto[],
  deleteAnswerId: number
): QuestionDto[] =>
  questions.map(question =>
    question.id == questionId
      ? {
          ...question,
          answers: question?.answers?.filter(
            item => item.id !== deleteAnswerId
          ),
        }
      : question
  );

export const setAnswersByQuestionId = (
  questionId: number,
  questions: QuestionDto[],
  newAnswers: AnswerDto[]
): QuestionDto[] =>
  questions.map(question =>
    question.id == questionId ? { ...question, answers: newAnswers } : question
  );

export const getAnswersByQuestionId = (
  questionId: number,
  questions: QuestionDto[]
): AnswerDto[] =>
  questions.find(question => question.id == questionId)?.answers ?? [];

export const resetIds = (
  questions: QuestionDto[]
): (Omit<QuestionDto, 'examinationId' | 'id' | 'answers'> & {
  answers: Omit<AnswerDto, 'questionId' | 'id'>[];
})[] =>
  questions.map(item => ({
    title: item.title,
    answers: removeAnswerIds(item.answers ?? []),
  }));

const removeAnswerIds = (answers: AnswerDto[]): PartialAnswers[] =>
  answers.map(({ isRight, title }) => ({ title, isRight }));

export const validateExam = (questions?: QuestionDto[]) => {
  if (!questions || questions.length == 0)
    throw new Error(ExaminationValidationErrorKeys.NO_COMPLETE_EXAMINATION);
  questions.forEach(question => {
    if (!question.title || question.title.trim().length == 0)
      throw Error(ExaminationValidationErrorKeys.NO_NAME_QUESTION);

    if (!question.answers || question.answers.length < 2)
      throw Error(ExaminationValidationErrorKeys.NO_ANSWERS);

    let countRightsAnswers = 0;
    question.answers.forEach(answer => {
      if (answer.isRight) countRightsAnswers += 1;
      if (!answer.title || answer.title.trim().length === 0)
        throw Error(ExaminationValidationErrorKeys.NO_NAME_ANSWER);
    });
    if (countRightsAnswers == 0)
      throw Error(ExaminationValidationErrorKeys.NO_RIGHTS_ANSWER);
  });
};
