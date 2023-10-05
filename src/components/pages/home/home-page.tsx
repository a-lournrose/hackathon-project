import React, { useContext, useEffect, useState } from 'react';
import { ArticleCard } from '@components/modules/article-card';
import { useTranslation } from 'react-i18next';
import { LocaleStorageKeys } from '@lib/constants';
import { AuthContext } from '@app/providers/auth';
import { CategoryList } from '@components/modules/category';
import { useSearchParams } from 'react-router-dom';
import { CATEGORIES_SEARCH_PARAMS } from '@components/modules/category/category-list';
import { searchParamToNumArray } from '@lib/utils/tools';
import { courses } from '@components/pages/home/mock/course';
import { EducationCard } from '@components/modules/education-card/education-card';

export const HomePage = () => {
  const { t } = useTranslation();
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
      <h1 className="head-text text-left">{t('ui:title.home')}</h1>
      <CategoryList withSearchParams />
      <section className="mt-9 flex flex-row flex-wrap gap-5 md:gap-10">
        {courses.map(item => (
          <EducationCard item={item} key={item.id}></EducationCard>
        ))}
      </section>
    </>
  );
};
