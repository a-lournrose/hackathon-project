import { QuestionDto } from '@components/modules/examination-constructor/mock/types';

export const questions: QuestionDto[] = [
  {
    id: 1,
    title:
      'Назовите, какой материк представляет собой древнюю Африкано-Аравийскую платформу',
    testId: 0,
    answers: [
      {
        id: 1,
        questionId: 45645645645,
        isRight: false,
        title: 'Южная Америка',
      },
      {
        id: 2,
        questionId: 2345325,
        isRight: false,
        title: 'Евразия',
      },
      {
        id: 3,
        questionId: 6789786976789,
        isRight: false,
        title: 'Австралия',
      },
      {
        id: 4,
        questionId: 3245345,
        isRight: true,
        title: 'Африка',
      },
    ],
  },
  {
    id: 2,
    testId: 456765432,
    imageSrc:
      'https://sun9-66.userapi.com/impg/HbUEbhaM3eeOUl_VVL1K6ZkDJoAIl8aQokKCvw/ikXMIgpf-qw.jpg?size=650x500&quality=96&sign=075fd003ab9aa904b99b4ade2f696666&type=album',
    title:
      'Определите по карте расстояние на местности по прямой от родника до дома лесника. Измерение проводите между центрами условных знаков. Полученный результат округлите до десятков метров. Выберите вариант ответа.',
    answers: [
      {
        id: 1,
        questionId: 4657532245,
        isRight: false,
        title: '310',
      },
      {
        id: 2,
        questionId: 213213424,
        isRight: true,
        title: '200',
      },
      {
        id: 3,
        questionId: 567867843,
        isRight: false,
        title: '150',
      },
      {
        id: 4,
        questionId: 2345353453245,
        isRight: false,
        title: '320',
      },
    ],
  },
  {
    id: 3,
    testId: 0,
    title: 'Как называется наиболее крупный океан на Земле?',
    answers: [
      {
        id: 1,
        questionId: 456732564423,
        isRight: false,
        title: 'Атлантический океан.',
      },
      {
        id: 2,
        questionId: 324534565467321,
        isRight: false,
        title: 'Индийский океан.',
      },
      {
        id: 3,
        questionId: 42353454325,
        isRight: false,
        title: 'Северно-ледовитый океан.',
      },
      {
        id: 4,
        questionId: 345625145,
        isRight: true,
        title: 'Тихий океан.',
      },
    ],
  },
  {
    id: 4,
    testId: 23454534655,
    title: 'Какое государство является самым крупным по площади в мире?',
    answers: [
      {
        id: 1,
        questionId: 34521544255436,
        isRight: false,
        title: 'США',
      },
      {
        id: 2,
        questionId: 345632414536456,
        isRight: false,
        title: 'Германия',
      },
      {
        id: 3,
        questionId: 56478980789,
        isRight: false,
        title: 'Канада',
      },
      {
        id: 4,
        questionId: 34253467563345,
        isRight: true,
        title: 'Российская Федерация.',
      },
    ],
  },
  {
    id: 5,
    testId: 123123435,
    title: 'Какие государства входят в Южную Америку?',
    answers: [
      {
        id: 1,
        questionId: 34564234342,
        isRight: false,
        title: 'Аргентина, Боливия, Бразилия',
      },
      {
        id: 2,
        questionId: 435653215324,
        isRight: false,
        title: 'Германия, Швеция, Швейцария',
      },
      {
        id: 3,
        questionId: 2134325235,
        isRight: false,
        title: 'Австралия, Япония и Индия',
      },
      {
        id: 4,
        questionId: 3453465456342311,
        isRight: true,
        title: 'США, Канада, Мексика',
      },
    ],
  },
];
