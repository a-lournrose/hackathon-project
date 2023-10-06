import React from 'react';
import { LessonContainer } from '@components/shared/lesson-container/lesson-container';
import FlippingContainer from '@components/shared/flipping-container/flipping-container';

export const LessonPage = () => {

  const contents = [<div>Какой то контент 1</div>, <div>Какой то контент 2</div>, <div>Какой то контент 3</div>]

  return (
    <LessonContainer>
      <div className='p-8'>
        <FlippingContainer contents={contents}/>
      </div>
    </LessonContainer>
  );
};