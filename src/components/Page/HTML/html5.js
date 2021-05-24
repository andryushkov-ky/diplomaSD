import React from 'react';
import pic1 from '../../../assets/imgs/Снимокlink.PNG';
import pic2 from '../../../assets/imgs/Снимокlinkurl.PNG';
import pic3 from "../../../assets/imgs/Снимокhq.PNG";

export const Html5 = () => {
  return (
    <>
      <div className="aboutHTML__title">
        <h1>Текст/Списки/Ссылки</h1>
      </div>
      <div className="aboutHTML__content">
        <p className="aboutHTML__text-title">Ссылки</p>
        <p className="aboutHTML__text">
          Гиперссылки создаются с помощью элемента &lt;a>&lt;/a>. Внутрь помещается текст,
          который будет отображаться на веб-странице. Текст ссылки отображается в браузере
          с подчёркиванием, цвет шрифта — синий, при наведении на ссылку курсор мыши
          меняет вид.<p></p>
          Обязательным параметром элемента &lt;a> является атрибут href, который задает
          URl-адрес веб-страницы.<p></p>
        </p>
        <img src={pic1} alt="" />
        <p className="aboutHTML__text">
          Ссылка состоит из двух частей — указателя и адресной части. Указатель ссылки
          представляет собой фрагмент текста или изображение, видимые для пользователя.
          Адресная часть ссылки пользователю не видна, она представляет собой адрес
          ресурса, к которому необходимо перейти.<p></p>
          Адресная часть ссылки состоит из URl. URl (Uniform Resource Locator) —
          унифицированный адрес ресурса. При создании адресов для разделения слов между
          собой рекомендуется использовать дефис, а не символ подчёркивания. В общем виде
          URl имеющий следующий формат:
        </p>
        <img src={pic2} alt="" />
        <p className="aboutHTML__text-title">Списки</p>
        <p className="aboutHTML__text">
          HTML-списки используются для группировки связанных между собой фрагментов
          информации. Существует три вида списков:
          <ol>
            <li>
              маркированный список — &lt;ul> — каждый элемент списка &lt;li> отмечается
              маркером
            </li>
            <li>
              нумерованный список — &lt;ol> — каждый элемент списка &lt;li> отмечается
              цифрой
            </li>
            <li>
              список определений — &lt;dl> — состоит из пар термин &lt;dt> — &lt;dd>
              определение
            </li>
          </ol>
        </p>
        <p className="aboutHTML__text">
          <ol>
            <li>
              Маркированный список представляет собой неупорядоченный список (от англ.
              Unordered List). Создаётся с помощью элемента &lt;ul>. В качестве маркера
              элемента списка выступает метка, например, закрашенный кружок.
            </li>
            <li>
              Нумерованный список создаётся с помощью элемента &lt;ol>. Каждый пункт
              списка также создаётся с помощью элемента &lt;li>. Браузер нумерует элементы
              по порядку автоматически и если удалить один или несколько элементов такого
              списка, то остальные номера будут автоматически пересчитаны.
            </li>
            <li>
              Списки определений создаются с помощью элемента &lt;dl>. Для добавления
              термина применяется элемент &lt;dt>, а для вставки определения — элемент
              &lt;dd>.
            </li>
          </ol>
        </p>
        <p className="aboutHTML__text-title">Текст</p>
        <p className="aboutHTML__text">
          HTML- текст представлен в спецификации элементами для форматирования и
          группировки текста. Данные элементы являются контейнерами для текста и не имеют
          визуального отображения.<p></p>
          Элементы для форматирования текста несут смысловую нагрузку и обычно задают для
          текста, заключенного внутрь, стилевое оформление, например, выделяют текст
          жирным начертанием или отображают его шрифтом другого семейства (свойство
          font-family).<p></p>
          Грамотно отформатированный текст дает понять поисковым системам, какие слова
          несут важную смысловую нагрузку, по каким из них предпочтительно ранжировать
          веб-страницу в поисковой выдаче. Вся текстовая информация, отображаемая на
          сайте, размещается внутри элемента &lt;body>.<p></p>
        </p>
        <img src={pic3} alt="" />
      </div>
    </>
  );
};