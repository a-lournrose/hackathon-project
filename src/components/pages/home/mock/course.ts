export interface ICourse {
  id: number,
  title: string,
  description: string
  teacherId: number
}

export const courses: ICourse[] = [
  {
    id: 1,
    title: 'Для 7-классников',
    description: 'Данный курс содержит материалы для учащихся в 7 классе и соответствующие темы.',
    teacherId: 1
  },
  {
    id: 2,
    title: 'Для 8-классников',
    description: 'Данный курс содержит материалы для учащихся в 7 классе и соответствующие темы.',
    teacherId: 1
  },
  {
    id: 3,
    title: 'Для 9-классников',
    description: 'Данный курс содержит материалы для учащихся в 7 классе и соответствующие темы.',
    teacherId: 1
  }
]