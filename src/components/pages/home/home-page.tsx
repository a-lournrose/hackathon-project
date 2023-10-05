import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '@app/providers/auth';
import { useSearchParams } from 'react-router-dom';
import { CATEGORIES_SEARCH_PARAMS } from '@components/modules/category/category-list';
import { searchParamToNumArray } from '@lib/utils/tools';
import { courses } from '@components/pages/home/mock/course';
import { EducationEntityCard } from '@components/modules/education-card/education-entity-card';
import { CreateEducationEntityCard } from '@components/modules/education-card/create-education-entity-card';

export const HomePage = () => {
  const [isOpenCreateCourseDialog, setIsOpenCreateCourseDialog] = useState<boolean>(false);

  const authContext = useContext(AuthContext);

  const [selectedCategoryIds, setSelectedCategoryIds] = useState<number[]>([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    setSelectedCategoryIds(
      searchParamToNumArray(searchParams.get(CATEGORIES_SEARCH_PARAMS)) ?? []
    );
  }, [searchParams]);

  return (
    <>
      <h1 className="head-text text-left">Мои курсы</h1>
      <section className="mt-9 flex flex-row flex-wrap gap-5 md:gap-10">
        {courses.map(item => (
          <EducationEntityCard item={item} key={item.id}></EducationEntityCard>
        ))}
        <CreateEducationEntityCard onClick={() => {}} type='course' />
      </section>
    </>
  );
};
