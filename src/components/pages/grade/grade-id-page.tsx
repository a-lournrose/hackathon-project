import React from 'react';
import GradeTable from '@components/shared/grade-table/grade-table';
import { Button } from '@components/ui/button';
import { FiChevronLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const GradeIdPage = () => {
  const navigate = useNavigate();
  const grades = [
    {
      id: 34564563456,
      title: 'Ханмабакиев Руслан',
      values: [50, 38, 88, 10, 100]
    },
    {
      id: 345643456,
      title: 'Ханмабакиев Олег',
      values: [55, 18, 88, 15, 100]
    },
    {
      id: 3464563456,
      title: 'Ханмабакиев Сын',
      values: [50, 34, 90, 18, 100]
    },
    {
      id: 345645,
      title: 'Ханмабакиев Егор',
      values: [50, 34, 82, 10, 99]
    },
    {
      id: 34564563456,
      title: 'Ханмабакиев Александр',
      values: [58, 39, 88, 10, 100]
    }
  ];
  const handleBack = () => navigate(-1);
  return (
    <div>
      <div className="flex items-center gap-2">
        <Button
          className="-ml-3"
          onClick={handleBack}
          variant="ghost"
          size="icon"
        >
          <FiChevronLeft size={25} />
        </Button>
        <h1 className="head-text text-left">Учащиеся</h1>
      </div>
      <div className='text-primary-500 mt-9'>В таблице представлены проценты выполнения задач по каждому урока по
        каждой темы.<br />Для просмотра успеваемости каждого учащегося по теме нажмите на тему.
      </div>
      <div className='border-primary-500 border-2 rounded-2xl overflow-hidden my-10'>
        <div className='bg-primary-500 w-full h-10 text-white text-body1-bold flex items-center pl-4'>Проценты
          выполнения уроков
        </div>
        <GradeTable grades={grades} studentsTheme/>
      </div>
      <Button className='block ml-auto' variant='primary'>Скачать Excel-таблицу</Button>
    </div>
  );
};

export default GradeIdPage;