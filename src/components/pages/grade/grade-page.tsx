import React from 'react';
import { Button } from '@components/ui/button';
import GradeTable from '@components/shared/grade-table/grade-table';

export const GradePage = () => {
  const grades = [
    {
      id: 34564563456,
      title: 'Тема 1',
      values: [50, 34, 88, 10, 100]
    },
    {
      id: 345643456,
      title: 'Тема 2',
      values: [55, 32, 88, 15, 100]
    },
    {
      id: 3464563456,
      title: 'Тема 3',
      values: [50, 34, 90, 10, 100]
    },
    {
      id: 345645,
      title: 'Тема 4',
      values: [50, 34, 88, 10, 99]
    },
    {
      id: 34564563456,
      title: 'Тема 5',
      values: [50, 39, 88, 10, 100]
    }
  ];
  return (
    <div>
      <h1 className="head-text text-left mb-9">Темы</h1>
      <div className='text-primary-500'>В таблице представлены проценты выполнения задач по каждому урока по
        каждой темы.<br />Для просмотра успеваемости каждого учащегося по теме нажмите на тему.
      </div>
      <div className='border-primary-500 border-2 rounded-2xl overflow-hidden my-10'>
        <div className='bg-primary-500 w-full h-10 text-white text-body1-bold flex items-center pl-4'>Проценты
          выполнения уроков
        </div>
        <GradeTable grades={grades}/>
      </div>
      <Button className='block ml-auto' variant='primary'>Скачать Excel-таблицу</Button>
    </div>
  );
};