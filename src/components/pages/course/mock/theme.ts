export interface ITheme {
  id: number;
  title: string;
  description: string;
  courseId: number;
}

export const themes: ITheme[] = [
  {
    id: 1,
    title: 'Для 7-классников',
    description:
      'Данный курс содержит материалы для учащихся в 7 классе и соответствующие темы.',
    courseId: 1,
  },
  {
    id: 2,
    title: 'Для 8-классников',
    description:
      'Данный курс содержит материалы для учащихся в 7 классе и соответствующие темы.',
    courseId: 1,
  },
  {
    id: 3,
    title: 'Для 9-классников',
    description:
      'Данный курс содержит материалы для учащихся в 7 классе и соответствующие темы.',
    courseId: 1,
  },
];
