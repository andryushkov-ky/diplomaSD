import React from 'react';
import logo from '../../../assets/imgs/HTMLDOMTree.png';

export const Html1 = () => {
  return (
    <>
      <div className="aboutHTML__title">
        <h1>Что такое HTML?</h1>
      </div>
      <div className="aboutHTML__content">
        <p className="aboutHTML__text">
          Приветствую Вас на курсе по изучению веб-программирования, ну что ж, приступим.
          Что же такое HTML?
        </p>
        <p className="aboutHTML__text">
          HTML-документ — это обычный текстовый документ, может быть создан как в обычном
          текстовом редакторе (Блокнот), так и в специализированном, с подсветкой кода
          (Notepad++, Visual Studio Code и т.п.). HTML-документ имеет расширение .html.
          HTML-документ состоит из дерева HTML-элементов и текста. Каждый элемент
          обозначается в исходном документе начальным (открывающим) и конечным
          (закрывающим) тегом (за редким исключением).
        </p>
        <p className="aboutHTML__text">
          HTML-документ состоит из дерева HTML-элементов и текста. Каждый элемент
          обозначается в исходном документе начальным (открывающим) и конечным
          (закрывающим) тегом (за редким исключением).
        </p>
        <img src={logo} alt="" className="aboutHTML__img" />
        <iframe
          className="aboutHTML__video"
          src="https://www.youtube.com/embed/gNclCoxyIf8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </>
  );
};
