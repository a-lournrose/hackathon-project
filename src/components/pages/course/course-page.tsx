import { useNavigate, useParams } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import { themes } from '@components/pages/course/mock/theme';
import { EducationEntityCard } from '@components/modules/education-card/education-entity-card';
import { CreateEducationEntityCard } from '@components/modules/education-card/create-education-entity-card';
import { Button } from '@components/ui/button';
import { FiChevronLeft } from 'react-icons/fi';
import { CreateEditThemeDialog } from '@components/dialogs/theme/create-edit-course-dialog';
import { CreateEditCourseDialog } from '@components/dialogs/course/create-edit-course-dialog';
import { useQuery } from '@tanstack/react-query';
import { api } from '@lib/api/plugins';
import { AuthContext } from '@app/providers/auth';

export const CoursePage = () => {
  /*const { isLoading, data } = useQuery({
    queryKey: ['themes'],
    queryFn: async () => await api.theme.getGetAll(),
  });*/

  const authContext = useContext(AuthContext);

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [isOpenCreateThemeDialog, setIsOpenCreateThemeDialog] =
    useState<boolean>(false);
  const [isOpenEditCourseDialog, setIsOpenEditCourseDialog] =
    useState<boolean>(false);

  const handleOpenCreateThemeDialog = () => setIsOpenCreateThemeDialog(true);
  const handleOpenEditCourseDialog = () => setIsOpenEditCourseDialog(true);
  const handleBack = () => navigate(-1);

  return (
    <>
      <CreateEditThemeDialog
        mode="create"
        isOpen={isOpenCreateThemeDialog}
        onOpenChange={setIsOpenCreateThemeDialog}
      />
      <CreateEditCourseDialog
        mode="edit"
        id={Number(id)}
        isOpen={isOpenEditCourseDialog}
        onOpenChange={setIsOpenEditCourseDialog}
      />
      <div className="w-full flex items-center justify-between gap-2">
        <div className="flex gap-2 items-center">
          <Button
            className="-ml-3"
            onClick={handleBack}
            variant="ghost"
            size="icon"
          >
            <FiChevronLeft size={25} />
          </Button>
          <h1 className="head-text text-left">Темы</h1>
        </div>
        {authContext.role === 'Teacher' && <div className="flex gap-2 items-center">
          <Button
            size="lg"
            onClick={handleOpenCreateThemeDialog}
            variant="primary"
          >
            Добавить тему
          </Button>
          <Button
            size="lg"
            onClick={handleOpenEditCourseDialog}
            variant="primary"
          >
            Редактировать программу обучения
          </Button>
        </div>}
      </div>
      <section className="mt-9 flex flex-row flex-wrap gap-5 md:gap-10">
        {themes.map(item => (
          <EducationEntityCard
            type="theme"
            title={item.title}
            description={item.description}
            key={item.id}
            id={item.id}
          />
        ))}
      </section>
    </>
  );
};
