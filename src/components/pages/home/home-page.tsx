import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '@app/providers/auth';
import { EducationEntityCard } from '@components/modules/education-card/education-entity-card';
import { CreateEditCourseDialog } from '@components/dialogs/course/create-edit-course-dialog';
import { Button } from '@components/ui/button';
import { EmptyContent } from '@components/shared/empty-content/empty-content';
import ProgressCard from '@components/modules/progress-card/progress-card';
import { PreloaderContext } from '@app/providers/preloader';
import { EducationContext } from '@app/providers/education/education-context';

export const HomePage = () => {
  // const myCoursesQuery = useQuery({
  //   queryKey: ['my-courses'],
  //   queryFn: async () =>
  //     await api.course.getMyAll(
  //       () => {},
  //       () => {}
  //     ),
  // });
  //
  // const allCoursesQuery = useQuery({
  //   queryKey: ['all-courses'],
  //   queryFn: async () => await api.course.getAll(),
  // });

  // const queryClient = useQueryClient();
  // queryClient.invalidateQueries(['djdjd'])

  const educationContext = useContext(EducationContext);
  const preloaderContext = useContext(PreloaderContext);
  const authContext = useContext(AuthContext);

  const [isOpenCreateCourseDialog, setIsOpenCreateCourseDialog] =
    useState<boolean>(false);

  const handleOpenCreateCourseDialog = () => setIsOpenCreateCourseDialog(true);

  useEffect(() => {
    preloaderContext.onVisibleTemp();
  }, []);

  return (
    <>
      <CreateEditCourseDialog
        isOpen={isOpenCreateCourseDialog}
        onOpenChange={setIsOpenCreateCourseDialog}
        mode="create"
      />
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
        {educationContext.coursers.length ? (
          educationContext.coursers?.map(item => (
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
      </section>
      <h1 className="head-text text-left mt-5">Все программы обучения</h1>
      <section className="mt-9 flex flex-row flex-wrap gap-5 md:gap-10">
        {educationContext.coursers?.length ? (
          educationContext.coursers.map(item => (
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
    </>
  );
};
