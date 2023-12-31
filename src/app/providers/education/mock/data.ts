import { Course, Lesson, Theme } from '@lib/api/models';

export const coursers: Course[] = [
  {
    id: 1,
    title: 'Для 7-классников',
    description:
      'Данный курс содержит материалы для учащихся в 7 классе и соответствующие темы.',
  },
  {
    id: 2,
    title: 'Для 8-классников',
    description:
      'Данный курс содержит материалы для учащихся в 8 классе и соответствующие темы.',
  },
  {
    id: 3,
    title: 'Для 9-классников',
    description:
      'Данный курс содержит материалы для учащихся в 9 классе и соответствующие темы.',
  },
];

export const themes: Theme[] = [
  {
    id: 1,
    title: 'Природа Земли',
    description:
      'Данная тема содержит материалы для учащихся в 8 классе и соответствующие темы.',
  },
  {
    id: 2,
    title: 'Реки и озёра Земли',
    description:
      'Данная тема содержит материалы для учащихся в 8 классе и соответствующие темы.',
  },
  {
    id: 3,
    title: 'Океанические течения',
    description:
      'Данная тема содержит материалы для учащихся в 8 классе и соответствующие темы.',
  },
  {
    id: 4,
    title: 'Страны мира',
    description:
      'Данная тема содержит материалы для учащихся в 8 классе и соответствующие темы.',
  },
];

export const lessons: Lesson[] = [
  {
    id: 1,
    title: '1. Развитие земной коры',
  },
  {
    id: 2,
    title: '2. Земная кора на карте',
  },
  {
    id: 3,
    title: '3. Природные ресурсы земной коры',
  },
  {
    id: 4,
    title: '4. Температура воздуха и осадки на разных широтах',
  },
  {
    id: 5,
    title: '5. Общая циркуляция атмосферы',
  },
];
