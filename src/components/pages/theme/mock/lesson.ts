export interface ILesson {
  id: number;
  title: string;
  articleBody: unknown;
  courseId: number;
}

export const lessons: ILesson[] = [
  {
    id: 1,
    title: 'Для 7-классников',
    articleBody:
      'Данный курс содержит материалы для учащихся в 7 классе и соответствующие темы.',
    courseId: 1,
  },
  {
    id: 2,
    title: 'Для 8-классников',
    articleBody:
      'Данный курс содержит материалы для учащихся в 7 классе и соответствующие темы.',
    courseId: 1,
  },
  {
    id: 3,
    title: 'Для 9-классников',
    articleBody:
      'Данный курс содержит материалы для учащихся в 7 классе и соответствующие темы.',
    courseId: 1,
  },
];
