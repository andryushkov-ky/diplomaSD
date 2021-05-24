import React, { useState } from 'react';
import './test.css';

export const Test = ({ questions, title }) => {
  const [round, setRound] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const totalLength = questions.length;
  const [answerList, setAnswerList] = useState([]);
  const isLastQuest = round === totalLength - 1;

  const nextRound = () => {
    if (selectedItem === null) {
      return null;
    }
    setAnswerList([...answerList, selectedItem]);
    setSelectedItem(null);

    if (!isLastQuest) {
      setRound(round + 1);
    } else {
      setShowResults(true);
    }
  };

  const restart = () => {
    setRound(0);
    setAnswerList([]);
    setSelectedItem(null);
    setShowResults(false);
  };

  return (
    <div className={'test_wrapper'}>
      <div className={'test_title'}>{title}</div>
      {showResults ? (
        <>
          {questions.map((item, key) => {
            const correctAnswer = item.choices[item.correctAnswer];
            const yourAnswer = item.choices[answerList[key]];

            return (
              <div className={'res_wrapper'}>
                <div className={'res_quest_num'}>
                  Вопрос №{key + 1}: {item.question}
                </div>
                <div className={`res_your_answer`}>
                  Ваш ответ:
                  <div
                    className={`${
                      correctAnswer === yourAnswer ? 'res_green' : 'res_red'
                    }`}
                  >
                    {yourAnswer}
                  </div>
                </div>
                <div className={'res_right_answer'}>
                  Правильный ответ: <div className={'res_black'}>{correctAnswer}</div>
                </div>
              </div>
            );
          })}
          <div className={'res_restart'} onClick={restart}>
            Пройти тест заново
          </div>
        </>
      ) : (
        <>
          <div className={'test_quest_num'}>Вопрос №{round + 1}</div>
          <div className={'test_quest_title'}>{questions[round].question}</div>
          <div className={'test_choices'}>
            {questions[round].choices.map((item, key) => {
              return (
                <div
                  className={`test_choice ${selectedItem === key ? 'active_choice' : ''}`}
                  onClick={() => {
                    setSelectedItem(key);
                  }}
                >
                  {item}
                </div>
              );
            })}
          </div>
          <div
            className={`next_quest ${selectedItem !== null ? '' : 'disabled_btn'}`}
            onClick={nextRound}
          >
            {isLastQuest ? 'Перейти к результатам' : 'Следующий вопрос'}
          </div>
        </>
      )}
    </div>
  );
};
