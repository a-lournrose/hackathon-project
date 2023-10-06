import React from 'react';
import LessonPreview from '@assets/images/lesson-preview.png';

interface ILessonContainerProps {
  children: React.ReactNode;
  extraChildren?: React.ReactNode;
}

export const LessonContainer = (props: ILessonContainerProps) => {
  return (
    <div className="overflow-hidden rounded-lg flex flex-col justify-start w-full gap-y-10 bg-white bg-top pb-8">
      <img
        src={LessonPreview}
        alt="preview"
        className="w-full object-none h-[180px]"
      />
      <div className="flex flex-col text-black">{props.children}</div>
      <div className="px-20">{props.extraChildren}</div>
    </div>
  );
};
