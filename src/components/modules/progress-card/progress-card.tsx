import React, { FC } from 'react';
import ProgressBar from '@components/shared/progress-bar/progress-bar';

interface IProgressCard {
  value: number;
  once?: boolean;
  lessons?: boolean[];
}

const ProgressCard:FC<IProgressCard> = ({value, once, lessons}) => {
  const mark = (value*100);
  return (
    <div className='h-72 w-full bg-white rounded-2xl my-10 p-10'>
      <div className='flex items-center justify-between'>
        <div>
          <div className='text-heading2-semibold text-primary-500 pb-2'>Получи оценку автоматом!</div>
          <div className='text-small-regular text-xs'>Успей набрать нужное количество баллов за <br/> прохождение тестов и получи желаемую оценку за четверть</div>
        </div>
        <div className='flex items-center space-x-12 px-4 py-2 bg-light-1 rounded-2xl'>
          <div>
            <div className='text-primary-500'>Набрано</div>
            <div className='flex items-end space-x-2'>
              <div className='text-[48px] font-bold leading-none text-primary-500'>{mark.toFixed()}</div>
              <div className='text-[20px] font-bold text-lime'>балла</div>
            </div>
          </div>
          {!once && <div>
            <div className='text-primary-500'>осталось</div>
            <div className='flex items-end space-x-2'>
              <div className='text-[48px] font-bold leading-none text-primary-500'>{(100 - mark).toFixed()}</div>
              <div className='text-[20px] font-bold text-lime'>баллов</div>
            </div>
          </div>}
        </div>
      </div>
      <ProgressBar mark={mark} lessons={lessons}/>
    </div>
  );
};

export default ProgressCard;