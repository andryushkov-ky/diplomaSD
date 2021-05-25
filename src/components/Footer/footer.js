import React, { useState } from 'react';
import whatsapp from '../../assets/imgs/whatsapp.svg';
import facebook from '../../assets/imgs/facebook.svg';
import instagram from '../../assets/imgs/instagram.svg';
import './footer.css';
import { Field, Form, Formik } from 'formik';
import axios from 'axios';

export const Footer = () => {
  const [isSendedData, setIsSendedData] = useState(null);

  return (
    <footer className="footer__innerAccount">
      <div className="footer">
        <div className="footer-content">
          <div className="footer-contacts">
            <h1 className="footer-title">Контакты</h1>
            <div className="footer-contacts-text">
              <p className="footer-text">Телефон: +7 (900) 622-03-82</p>
              <p className="footer-text">E-mail: sofia.davidova999@gmail.com</p>
            </div>
            <div className="footer-contacts-buttons">
              <button className="footer-message-button">
                <img src={whatsapp} alt="" className="footer-message-button" />
              </button>
              <button className="footer-message-button">
                <img src={facebook} alt="" className="footer-message-button" />
              </button>
              <button className="footer-message-button">
                <img src={instagram} alt="" className="footer-message-button" />
              </button>
            </div>
          </div>
          <div className="footer-question">
            <h1 className="footer-title">Обратная связь</h1>
            {!isSendedData ? (
              <div className="form-question">
                <Formik
                  initialValues={{ email: '', name: '', text: '' }}
                  validate={values => {
                    const errors = {};
                    if (!values.email) {
                      errors.email = 'Поле должно быть заполнено!';
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                      errors.email = 'Некорректный email';
                    }

                    if (!values.name) {
                      errors.name = 'Поле должно быть заполнено';
                    }

                    if (!values.text) {
                      errors.text = 'Пожалуйста, оставьте сообщение';
                    }

                    return errors;
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    console.log('SEND CONTACT US DATA', values);
                    axios.post(`/api/postContactInfo`, values);
                    setIsSendedData(true);
                  }}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <Field name="name">
                        {({ field, form: { touched, errors }, meta }) => (
                          <div className="form-item">
                            <input
                              type="text"
                              className="form-input"
                              placeholder="Ваше имя"
                              {...field}
                            />
                            {meta.touched && meta.error && (
                              <div className="field-error">{meta.error}</div>
                            )}
                          </div>
                        )}
                      </Field>
                      <Field name="email">
                        {({ field, form: { touched, errors }, meta }) => (
                          <div className="form-item">
                            <input
                              type="text"
                              className="form-input"
                              placeholder="Email"
                              {...field}
                            />
                            {meta.touched && meta.error && (
                              <div className="field-error">{meta.error}</div>
                            )}
                          </div>
                        )}
                      </Field>
                      <Field name="text">
                        {({ field, form: { touched, errors }, meta }) => (
                          <div className="form-item">
                            <textarea
                              name="form-messages"
                              id="form-messages"
                              rows="6"
                              placeholder="Введите ваше сообщение"
                              {...field}
                            />
                            {meta.touched && meta.error && (
                              <div className="field-error">{meta.error}</div>
                            )}
                          </div>
                        )}
                      </Field>
                      <button
                        type="submit"
                        className="form-button"
                        disabled={isSubmitting}
                      >
                        Отправить
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            ) : (
              <div className={'contactUs_send'}>Ваша информация была успешно отправлена!</div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
