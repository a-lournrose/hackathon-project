import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '@app/providers/auth';
import { EducationEntityCard } from '@components/modules/education-card/education-entity-card';
import { CreateEditCourseDialog } from '@components/dialogs/course/create-edit-course-dialog';
import { Button } from '@components/ui/button';
import { EmptyContent } from '@components/shared/empty-content/empty-content';
import ProgressCard from '@components/modules/progress-card/progress-card';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { api } from '@lib/api/plugins';
import { PreloaderContext } from '@app/providers/preloader';

export const HomePage = () => {
  const myCoursesQuery = useQuery({
    queryKey: ['my-courses'],
    queryFn: async () =>
      await api.course.getMyAll(
        () => {},
        () => {}
      ),
  });

  const allCoursesQuery = useQuery({
    queryKey: ['all-courses'],
    queryFn: async () => await api.course.getAll(),
  });

  // const queryClient = useQueryClient();
  // queryClient.invalidateQueries(['djdjd'])

  const [isOpenCreateCourseDialog, setIsOpenCreateCourseDialog] =
    useState<boolean>(false);

  const authContext = useContext(AuthContext);
  const preloaderContext = useContext(PreloaderContext);

  const handleOpenCreateCourseDialog = () => setIsOpenCreateCourseDialog(true);

  useEffect(() => {
    if (myCoursesQuery.isFetching || allCoursesQuery.isFetching)
      preloaderContext.setVisible(true);
    else preloaderContext.setVisible(false);
  }, [myCoursesQuery.isFetching, allCoursesQuery.isFetching]);

  return (
    <>
      <CreateEditCourseDialog
        isOpen={isOpenCreateCourseDialog}
        onOpenChange={setIsOpenCreateCourseDialog}
        mode="create"
      />
      <ProgressCard value={0.78} />
      <ProgressCard value={0.55} once lessons={[true, true, true, false]} />
      <div className="w-full flex items-center justify-between">
        <h1 className="head-text text-left">Мои программы обучения</h1>
        {authContext.role === 'Teacher' && (
          <Button
            size="lg"
            onClick={handleOpenCreateCourseDialog}
            variant="primary"
          >
            Добавить программу обучения
          </Button>
        )}
      </div>
      <section className="mt-9 flex flex-row flex-wrap gap-5 md:gap-10">
        {/*courses*/}
        {myCoursesQuery.data?.length ? (
          myCoursesQuery.data?.map(item => (
            <EducationEntityCard
              type="course"
              title={item.title ?? ''}
              description={item.description ?? ''}
              id={item.id ?? 1}
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
        <h1 className="head-text text-left">Все программы обучения</h1>
        <section className="mt-9 flex flex-row flex-wrap gap-5 md:gap-10">
          {allCoursesQuery.data?.length ? (
            allCoursesQuery.data.map(item => (
              <EducationEntityCard
                type="course"
                title={item.title ?? ''}
                description={item.description ?? ''}
                id={item.id ?? 1}
                key={item.id}
              />
            ))
          ) : (
            <EmptyContent />
          )}
        </section>
      </section>
    </>
  );
};
