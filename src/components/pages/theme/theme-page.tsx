import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@components/ui/button';
import { FiChevronLeft } from 'react-icons/fi';
import { lessons } from './mock/lesson';
import { EducationEntityCard } from '@components/modules/education-card/education-entity-card';
import { CreateEducationEntityCard } from '@components/modules/education-card/create-education-entity-card';
import React from 'react';

export const ThemePage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleRedirectToWrite = () => navigate('/write');
  const handleBack = () => navigate(-1);

  return (
    <>
      <div className="w-full flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Button
            className="-ml-3"
            onClick={handleBack}
            variant="ghost"
            size="icon"
          >
            <FiChevronLeft size={25} />
          </Button>
          <h1 className="head-text text-left">Уроки</h1>
        </div>
        <Button size="lg" onClick={handleRedirectToWrite} variant="primary">
          Добавить урок
        </Button>
      </div>
      <section className="mt-9 flex flex-row flex-wrap gap-5 md:gap-10">
        {lessons.map(item => (
          <EducationEntityCard
            type="lesson"
            title={item.title}
            //description={item.description}
            key={item.id}
            id={item.id}
          />
        ))}
        {/*{true && (*/}
        {/*  <CreateEducationEntityCard*/}
        {/*    onClick={handleRedirectToWrite}*/}
        {/*    type="lesson"*/}
        {/*  />*/}
        {/*)}*/}
      </section>
    </>
  );
};
