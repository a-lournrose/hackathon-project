import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@components/ui/button';
import { FiChevronLeft } from 'react-icons/fi';
import { lessons } from './mock/lesson';
import { EducationEntityCard } from '@components/modules/education-card/education-entity-card';
import { CreateEducationEntityCard } from '@components/modules/education-card/create-education-entity-card';
import React, { useContext, useState } from 'react';
import { CreateEditThemeDialog } from '@components/dialogs/theme/create-edit-course-dialog';
import { AuthContext } from '@app/providers/auth';

export const ThemePage = () => {

  const authContext = useContext(AuthContext);

  const [isOpenEditThemeDialog, setIsOpenEditThemeDialog] = useState(false);

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleRedirectToWrite = () => navigate('/write');
  const handleBack = () => navigate(-1);

  return (
    <>
      <CreateEditThemeDialog
        mode="edit"
        isOpen={isOpenEditThemeDialog}
        onOpenChange={setIsOpenEditThemeDialog}
        id={Number(id)}
      />
      <div className="w-full flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 justify-between">
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
        {authContext.role === 'Teacher' && <div className='flex items-center space-x-3'>
          <Button size="lg" onClick={() => setIsOpenEditThemeDialog(true)} variant="primary">
            Редактировать тему
          </Button>
          <Button size="lg" onClick={handleRedirectToWrite} variant="primary">
            Добавить урок
          </Button>
        </div>}
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
