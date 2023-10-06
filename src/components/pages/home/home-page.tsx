import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '@app/providers/auth';
import { useSearchParams } from 'react-router-dom';
import { CATEGORIES_SEARCH_PARAMS } from '@components/modules/category/category-list';
import { searchParamToNumArray } from '@lib/utils/tools';
import { courses } from '@components/pages/home/mock/course';
import { EducationEntityCard } from '@components/modules/education-card/education-entity-card';
import { CreateEducationEntityCard } from '@components/modules/education-card/create-education-entity-card';
import { CreateEditCourseDialog } from '@components/dialogs/course/create-edit-course-dialog';
import { Button } from '@components/ui/button';
import { FiPlus } from 'react-icons/fi';
import { EmptyContent } from '@components/shared/empty-content/empty-content';
import ProgressCard from '@components/modules/progress-card/progress-card';
export const HomePage = () => {
  const [isOpenCreateCourseDialog, setIsOpenCreateCourseDialog] =
    useState<boolean>(false);

  const authContext = useContext(AuthContext);

  const handleOpenCreateCourseDialog = () => setIsOpenCreateCourseDialog(true);

  return (
    <>
      <CreateEditCourseDialog
        isOpen={isOpenCreateCourseDialog}
        onOpenChange={setIsOpenCreateCourseDialog}
        mode="create"
      />
      <ProgressCard value={0.78} />
      <div className="w-full flex items-center justify-between">
        <h1 className="head-text text-left">Мои программы обучения</h1>

        <Button
          size="lg"
          onClick={handleOpenCreateCourseDialog}
          variant="primary"
        >
          Добавить программу обучения
        </Button>
      </div>
      <section className="mt-9 flex flex-row flex-wrap gap-5 md:gap-10">
        {courses.length ? (
          courses.map(item => (
            <EducationEntityCard
              type="course"
              title={item.title}
              description={item.description}
              id={item.id}
              key={item.id}
            />
          ))
        ) : (
          <EmptyContent />
        )}
        {/*{true && (*/}
        {/*  <CreateEducationEntityCard*/}
        {/*    onClick={handleOpenCreateCourseDialog}*/}
        {/*    type="course"*/}
        {/*  />*/}
        {/*)}*/}
        {/*проверить роль юзера*/}
      </section>
    </>
  );
};
