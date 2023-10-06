import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@components/ui/button';
import { FiChevronLeft } from 'react-icons/fi';
import { EducationEntityCard } from '@components/modules/education-card/education-entity-card';
import React, { useContext, useEffect, useState } from 'react';
import { CreateEditThemeDialog } from '@components/dialogs/theme/create-edit-course-dialog';
import { AuthContext } from '@app/providers/auth';
import { EducationContext } from '@app/providers/education/education-context';
import { PreloaderContext } from '@app/providers/preloader';
import { EmptyContent } from '@components/shared/empty-content/empty-content';
import ProgressCard from '@components/modules/progress-card/progress-card';
import { CreateEditCourseDialog } from '@components/dialogs/course/create-edit-course-dialog';

export const ThemePage = () => {
  const educationContext = useContext(EducationContext);
  const preloaderContext = useContext(PreloaderContext);
  const authContext = useContext(AuthContext);

  const [isOpenEditThemeDialog, setIsOpenEditThemeDialog] = useState(false);

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleRedirectToWrite = () => navigate('/write');
  const handleBack = () => navigate(-1);

  useEffect(() => {
    preloaderContext.onVisibleTemp();
  }, []);

  return (
    <>
      <CreateEditThemeDialog
        mode="edit"
        defaultValue={educationContext.themes.find(
          item => item.id == Number(id)
        )}
        isOpen={isOpenEditThemeDialog}
        onOpenChange={setIsOpenEditThemeDialog}
        id={Number(id)}
      />
      <ProgressCard value={0.55} once lessons={[true, true, true, false]} />
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
        {authContext.role === 'Teacher' && (
          <div className="flex items-center space-x-3">
            <Button
              size="lg"
              onClick={() => setIsOpenEditThemeDialog(true)}
              variant="primary"
            >
              Редактировать тему
            </Button>
            <Button size="lg" onClick={handleRedirectToWrite} variant="primary">
              Добавить урок
            </Button>
          </div>
        )}
      </div>
      <section className="mt-9 flex flex-row flex-wrap gap-5 md:gap-10">
        {educationContext.lessons?.length ? (
          educationContext.lessons.map(item => (
            <EducationEntityCard
              type="lesson"
              title={item.title}
              key={item.id}
              id={item.id}
            />
          ))
        ) : (
          <EmptyContent />
        )}
      </section>
    </>
  );
};
