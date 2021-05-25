import React from 'react';
import { Html1 } from '../HTML/html1';
import { Html2 } from '../HTML/html2';
import { Html3 } from '../HTML/html3';
import { Html4 } from '../HTML/html4';
import { Html5 } from '../HTML/html5';

export const HTMLquestions = [
  {
    question: 'Что означает тег input',
    choices: [
      'Контейнер формы',
      'Элемент формы(поля) различных элементов',
      'Кликабельная кнопка',
      'Контейнер в которм содержаться все элементы',
      'Метод отправки данных на сервер',
    ],
    correctAnswer: 1,
  },
  {
    question: 'Для чего предназначен тег th?',
    choices: [
      'Для создания одной ячейки таблицы, которая обозначается как заголовочная',
      'Служит контейнером для создания строки таблицы',
      'Для создания одной ячейки таблицы',
      'Служит контейнером для элементов, определяющих содержимое таблицы',
      'Применяется для определения стилей элементов веб-страницы',
    ],
    correctAnswer: 0,
  },
  {
    question: 'Что такое вложенность тегов',
    choices: [
      'Это способ построения и создания языка разметки гипертекста, при котором происходит вложение одного тега в другой',
      'Предназначенные для предоставления структурированных метаданных о веб-странице',
      'Предназначен для указания типа текущего документа — DTD (document type definition, описание типа документа)',
      'Является универсальным блочным элементом и предназначен для группирования элементов документа с целью изменения вида содержимого через стили',
      'Предназначен для определения строчных элементов документа',
    ],
    correctAnswer: 0,
  },
  {
    question: 'Какой тег не относиться к тегам текста',
    choices: ['h1', 'p', 'span', 'main', 'sup'],
    correctAnswer: 3,
  },
  {
    question: 'Что делает тег <а>',
    choices: [
      'Предназначен для создания ссылок',
      'Предназначен для отображения на веб-странице изображений в графическом формате GIF, JPEG или PNG',
      'Задает адрес документа, на который следует перейти',
      'Задает «шапку» сайта или раздела, в которой обычно располагается заголовок',
      'Такого тега не существует',
    ],
    correctAnswer: 0,
  },
];

export const HTMLpageConstructor = {
  'HTML_1.0': {
    prevPage: {
      link: '/aboutHTML',
      text: 'Перейти к разделу',
    },
    nextPage: {
      link: '/aboutHTML/HTML_1.1',
      text: 'Следующий урок',
    },
    pageId: 'html1',
    chapterId: 'aboutHTML',
    totalPages: 5,
    content: () => <Html1 />,
  },
  'HTML_1.1': {
    prevPage: {
      link: '/aboutHTML/HTML_1.0',
      text: 'Предыдущий урок',
    },
    nextPage: {
      link: '/aboutHTML/HTML_1.2',
      text: 'Следующий урок',
    },
    pageId: 'html2',
    chapterId: 'aboutHTML',
    totalPages: 5,
    content: () => <Html2 />,
  },
  'HTML_1.2': {
    prevPage: {
      link: '/aboutHTML/HTML_1.1',
      text: 'Предыдущий урок',
    },
    nextPage: {
      link: '/aboutHTML/HTML_1.3',
      text: 'Следующий урок',
    },
    pageId: 'html3',
    chapterId: 'aboutHTML',
    totalPages: 5,
    content: () => <Html3 />,
  },
  'HTML_1.3': {
    prevPage: {
      link: '/aboutHTML/HTML_1.2',
      text: 'Предыдущий урок',
    },
    nextPage: {
      link: '/aboutHTML/HTML_1.4',
      text: 'Следующий урок',
    },
    pageId: 'html4',
    chapterId: 'aboutHTML',
    totalPages: 5,
    content: () => <Html4 />,
  },
  'HTML_1.4': {
    prevPage: {
      link: '/aboutHTML/HTML_1.3',
      text: 'Предыдущий урок',
    },
    nextPage: {
      link: '/aboutHTML',
      text: 'Перейти к разделу',
    },
    pageId: 'html5',
    chapterId: 'aboutHTML',
    totalPages: 5,
    content: () => <Html5 />,
  },
};
