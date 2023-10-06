export interface AnswerDto {
  id: number;
  title: string;
  isRight: boolean;
  questionId?: number;
}

export interface QuestionDto {
  id: number;
  title: string;
  imageSrc?: string;
  answers: AnswerDto[];
  testId?: number;
}

export interface Test {
  id: number;
  title: string;
  description: string;
  questions: QuestionDto[];
}
