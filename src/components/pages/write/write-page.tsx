import React, { Ref, useContext, useRef, useState } from 'react';
import { TextEditor } from '@components/modules/text-editor';
import type { ITextEditorForwardRef } from '@components/modules/text-editor';
import { Button } from '@components/ui/button';
import { useTranslation } from 'react-i18next';
import { FiChevronLeft, FiSave, FiShare } from 'react-icons/fi';
import { LocaleStorageKeys } from '@lib/constants';
import { checkBlocksLength } from '@lib/utils/validations/text-editor';
import { toast } from '@components/ui/use-toast';
import { OutputData } from '@editorjs/editorjs';
import { IHashtagsConstructorForwardRef } from '@components/modules/hashtags-constructor';
import { LessonContainer } from '@components/shared/lesson-container/lesson-container';
import { ExaminationConstructor } from '@components/modules/examination-constructor';
import { IExaminationConstructorForwardRef } from '@components/modules/examination-constructor/examination-constructor';
import { useNavigate } from 'react-router-dom';
import { EducationContext } from '@app/providers/education/education-context';

export const WritePage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [selectedCategoryIds, setSelectedCategoryIds] = useState<number[]>([]);
  const editorRef = useRef<ITextEditorForwardRef>();
  const hashtagsConstructorRef = useRef<IHashtagsConstructorForwardRef>();
  const examinationRef = useRef<IExaminationConstructorForwardRef>();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const validationForPublish = (data?: OutputData) => {
    if (!data) throw new Error();
    if (!checkBlocksLength(data))
      throw new Error(t('toast:error.small_article'));
    // if (!selectedCategoryIds.length)
    //   throw new Error('validation:error.no_category_selected');
  };
  const educationContext = useContext(EducationContext);

  // const handleSaveAsDraft = async () => {
  //   try {
  //     const data = await editorRef.current?.onGetData();
  //     validationForPublish(data);
  //     localStorage.setItem(
  //       LocaleStorageKeys.DRAFT,
  //       JSON.stringify({
  //         categories: hashtagsConstructorRef.current?.getData(),
  //         body: await editorRef.current?.onGetData(),
  //       })
  //     );
  //     toast({
  //       variant: 'success',
  //       title: t('toast:info.draft_saved'),
  //     });
  //   } catch (e) {
  //     return toast({
  //       variant: 'destructive',
  //       title: (e as Error).message,
  //     });
  //   }
  // };

  const handlePublish = async () => {
    setIsLoading(true);
    try {
      const EditorData = await editorRef.current?.onGetData();
      validationForPublish(EditorData);
      console.log(
        'article body',
        EditorData,
        'test',
        examinationRef.current?.getAndValidateData()
      );
      const title =
        EditorData.blocks.find(item => item.type == 'header')?.data?.text ??
        `Новый крок №${
          Math.max(...educationContext.lessons.map(item => item.id)) + 1
        }`;
      educationContext.setLessons([
        ...educationContext.lessons,
        {
          title,
          id: Math.max(...educationContext.lessons.map(item => item.id)) + 1,
        },
      ]);
    } catch (e) {
      //console.log(e, 111, editorRef);
      return toast({
        variant: 'destructive',
        title: (e as Error).message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => navigate(-1);

  return (
    <>
      <div className="flex flex-col w-full gap-4">
        <div className="flex items-center gap-2 ">
          <Button
            className="-ml-3"
            onClick={handleBack}
            variant="ghost"
            size="icon"
          >
            <FiChevronLeft size={25} />
          </Button>
          <h1 className="head-text text-left">
            {t('ui:title.creating_article')}
          </h1>
        </div>

        <LessonContainer
          extraChildren={
            <div className="flex flex-col gap-y-6">
              <h1 className="text-center text-lime text-body-bold">
                Создайте тест по материаллу
              </h1>
              <ExaminationConstructor
                ref={examinationRef as Ref<IExaminationConstructorForwardRef>}
                noImmediatelyCreateQuestion
              />
              <div className="flex items-start self-center">
                <Button
                  onClick={handlePublish}
                  variant="primary"
                  data={{ leftIcon: <FiShare />, isLoading: isLoading }}
                >
                  {t('ui:button.create')}
                </Button>
              </div>
            </div>
          }
        >
          <TextEditor
            autofocus
            withHeading
            ref={editorRef as Ref<ITextEditorForwardRef>}
          />
        </LessonContainer>
        {/*<HashtagsConstructor*/}
        {/*  className="mt-2"*/}
        {/*  ref={hashtagsConstructorRef as Ref<IHashtagsConstructorForwardRef>}*/}
        {/*/>*/}
      </div>
    </>
  );
};
