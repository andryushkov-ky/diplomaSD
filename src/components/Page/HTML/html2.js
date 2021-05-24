import React from 'react';
import logo from '../../../assets/imgs/HTMLDOMTree.png';

export const Html2 = () => {
  return (
    <>
      <div className="aboutHTML__title">
        <h1>HTML теги</h1>
      </div>
      <div className="aboutHTML__content">
        <p className="aboutHTML__text">
          HTML-теги — основа языка HTML. Теги используются для разграничения начала и
          конца элементов в разметке.<br></br>
          Каждый HTML-документ состоит из дерева HTML-элементов и текста. Каждый
          HTML-элемент обозначается начальным (открывающим) и конечным (закрывающим)
          тегом. Открывающий и закрывающий теги содержат имя тега.<br></br>
          Все HTML-элементы делятся на пять типов:<br></br>
          <ul>
            <li>
              пустые элементы — &lt;area>, &lt;base>, &lt;br>, &lt;col>, &lt;embed>,
              &lt;hr>, &lt;img>,&lt;input>, &lt;link>, &lt;menuitem>, &lt;meta>,
              &lt;param>, &lt;source>, &lt;track>, &lt;wbr>
            </li>
            <li>элементы с неформатированным текстом — &lt;script>, &lt;style></li>
            <li>элементы, выводящие неформатированный текст</li>
            <li>элементы из другого пространства имён — MathML и SVG;</li>
            <li>обычные элементы — все остальные элементы</li>
          </ul>
        </p>
      </div>
    </>
  );
};
