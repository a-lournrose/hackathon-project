import React, { FC } from 'react';
import { cn } from '@lib/utils/tools';

interface IProgressBar {
  mark?: number;
  lessons?: boolean[];
}

const progressStyles = 'z-2 w-full h-4 bg-slate-100';
const markStyles = 'z-3 h-16 w-16 min-w-[4rem] bg-light-1 rounded-full flex items-center justify-center text-[48px] text-white font-bold text-primary-500';

const ProgressBar:FC<IProgressBar> = ({mark, lessons}) => {

  if(lessons) {
    return (
      <div className='flex items-center justify-between mt-10'>
        {lessons.map((lessonStatus, index) => (
          <React.Fragment key={index}>
            <div className={cn(progressStyles, lessonStatus && 'bg-primary-500', 'rounded-l-2xl')}></div>
            <div style={{boxShadow: '0 0 0 5px #FFF'}} className={cn(markStyles, lessonStatus && 'bg-primary-500 text-white', 'relative')}>
              <div className='absolute text-body-normal text-black w-16' style={{left: '50%', bottom: '0', transform: 'translate(-40%, 27px)'}}>
                Урок {index+1}
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    )
  }

  if(mark) {
    const three = mark >= 60;
    const five = mark >= 83;
    const four = ((mark >= 73) && (mark < 83)) || five;

    return (
      <div className='flex items-center justify-between mt-10'>
        <div className={cn(progressStyles, three && 'bg-primary-500', 'rounded-l-2xl')}></div>
        <div style={{ boxShadow: '0 0 0 5px #FFF' }}
             className={cn(markStyles, three && 'bg-primary-500 text-white')}>3
        </div>
        <div className={cn(progressStyles, four && 'bg-primary-500')}></div>
        <div style={{ boxShadow: '0 0 0 5px #FFF' }} className={cn(markStyles, four && 'bg-primary-500 text-white')}>4
        </div>
        <div className={cn(progressStyles, five && 'bg-primary-500')}></div>
        <div style={{ boxShadow: '0 0 0 5px #FFF' }} className={cn(markStyles, five && 'bg-primary-500 text-white')}>5
        </div>
      </div>
    );
  }
};

export default ProgressBar;