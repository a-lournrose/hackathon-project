import { useNavigate, useParams } from 'react-router-dom';
import React, { useState } from 'react';
import { themes } from '@components/pages/course/mock/theme';
import { EducationEntityCard } from '@components/modules/education-card/education-entity-card';
import { CreateEducationEntityCard } from '@components/modules/education-card/create-education-entity-card';
import { Button } from '@components/ui/button';
import { FiChevronLeft } from 'react-icons/fi';

export const CoursePage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isOpenCreateThemeDialog, setIsOpenCreateThemeDialog] =
    useState<boolean>(false);

  const handleOpenCreateThemeDialog = () => setIsOpenCreateThemeDialog(true);
  const handleBack = () => navigate(-1);

  return (
    <>
      <div className="w-full flex items-center justify-start gap-2">
        <Button onClick={handleBack} variant="ghost" size="icon">
          <FiChevronLeft size={25} />
        </Button>
        <h1 className="head-text text-left">Темы</h1>
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
        {true && (
          <CreateEducationEntityCard
            onClick={handleOpenCreateThemeDialog}
            type="theme"
          />
        )}
      </section>
    </>
  );
};
