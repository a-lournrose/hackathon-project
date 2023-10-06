import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { LessonContainer } from '@components/shared/lesson-container/lesson-container';
import { Button } from '@components/ui/button';
import { Tabs } from '@radix-ui/react-tabs';
import { TabsContent, TabsList, TabsTrigger } from '@components/ui/tabs';
import { LessonTest } from '@components/pages/individual-lesson/lesson-test';
import { questions } from '@components/pages/individual-lesson/mock/test';

type TabKeysType = 'article' | 'test';

interface IIndividualLessonProps {}

export const IndividualLessonPage = (props: IIndividualLessonProps) => {
  const { id } = useParams<{ id: string }>();

  const [tab, setTab] = useState<TabKeysType>('article');

  // <ExaminationConstructor
  // //defaultValue={{}}
  // //ref={examinationRef as Ref<IExaminationConstructorForwardRef>}
  // noImmediatelyCreateQuestion
  // />

  return (
    <div className="flex flex-col w-full gap-4">
      <h1 className="head-text text-center">{`Урок №${id}.`}</h1>
      <Tabs value={tab} onValueChange={(value: TabKeysType) => setTab(value)}>
        <div className="w-full flex justify-center">
          <TabsList>
            <TabsTrigger value="article">Теория</TabsTrigger>
            <TabsTrigger value="test">Тест</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="article">
          <LessonContainer>
            <div className="flex flex-col gap-y-6 px-20">
              <h1 className="text-heading4-semibold">Развитие земной коры</h1>
              <p>
                Сегодня на уроке мы узнаем о строении материковой и океанической
                коры, о том, что объясняет теория литосферных плит, о внутренних
                и внешних процессах, формирующих рельеф.
              </p>
              <h1>Земная нора</h1>
              <p>
                Существует множество гипотез о том, как образовалась планета
                Земля и как на ее поверхности возникла тонкая твердая оболочка —
                земная кора, на которой мы живем. Земная кора различается по
                строению и толщине под материками и океанами. Соответственно,
                выделяют два типа коры: океаническую и материковую
                (континентальную) (см. рис. 1). В чем же разница?
              </p>
              <img
                src="https://sun9-17.userapi.com/impg/vnhm2YTykB-jHr04byKnUPg0OqoqVPeR8ppIFA/eb2gUNUwxQI.jpg?size=604x340&quality=96&sign=04942f7640796f6e37d2b5bc90dac048&type=album"
                alt="image"
              />
              <span className="text-desc">Рисунок 1 — Земная кора</span>
              <p>
                Континентальная (материковая) кора имеет значительную толщину —
                до 70км. Она сложена осадочными породами, ниже идут
                магматические и метаморфические породы различного состава.
                Океаническая кора имеет толщину от 5 до 10км и сложена
                преимущественно базальтами.
              </p>
              <h1 className="text-heading4-semibold">
                Теория литосферных плит
              </h1>
              <p>
                После того как теория Вегенера была окончательно отвергнута, на
                смену ей пришла теория литосферных плит. По теории литосферных
                плит, большие участки литосферы — плиты — двигаются, при этом в
                каждой плите может быть и океаническая, и континентальная земная
                кора. Литосферные плиты двигаются, как предполагается, под
                воздействием потоков вещества мантии.
              </p>
              <p>
                огласно последней теории, литосфера глубинными разломами
                разделена на семь крупных и много мелких блоков — плит, которые
                находятся в постоянном медленном движении. Границы литосферных
                плит — это самые активные и самые подвижные участки земной коры.
                Литосферные плиты расходятся или скользят рядом друг с другом.
              </p>
              <h1 className="text-heading4-semibold">Пангея</h1>
              <p>
                В истории развития Земли ученые выделяют четыре крупных этапа.
                Каждый из них заканчивался образованием суперматерика, который
                был окружен одним океаном.
              </p>
              <p>
                Первый – это Моногея. Он включал в себя всю континентальную кору
                и образовался около двух с половиной миллиардов лет назад
              </p>
              <p>Второй – Метагея, около двух миллиардов лет назад.</p>
              <p>
                Третий – Мезагея. Он образовался около одного миллиарда лет
                назад.
              </p>
              <p>
                Последний образовался около двухсот миллионов лет назад. Ученые
                назвали его Пангея (см. рис. 2) – всеобщая Земля. Он был окружен
                древним океаном.
              </p>
              <img
                src="https://sun9-1.userapi.com/impg/LcMQXxUOLnaOAmczSqJMoMCDHugFaszCDoipew/OeLBNl5ykPs.jpg?size=604x780&quality=96&sign=d6917c12dc1521d41564dea92878bd50&type=album"
                alt="image"
              />
              <span className="text-desc">Рисунок 2 — Пангея</span>
              <div className="w-full text-center flex flex-col gap-2 items-center">
                <h1 className="head-text text-center">
                  Сделай дело и гуляй смело!
                </h1>
                <div>
                  <p className="w-max-[50%]">Выполни тест по теории раньше</p>
                  <p>остальных иполучи дополнительные баллы.</p>
                </div>

                <Button
                  onClick={() => setTab('test')}
                  className="w-fit mt-4"
                  variant="primary"
                >
                  Перейти к тесту
                </Button>
              </div>
            </div>
          </LessonContainer>
        </TabsContent>
        <TabsContent value="test">
          <LessonTest questions={questions}/>
        </TabsContent>
      </Tabs>
    </div>
  );
};
