import React, { useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './register.css';

export const Register = ({ setUser }) => {
  const [isRegister, setIsRegister] = useState(false);

  const toggleRegister = () => {
    setIsRegister(!isRegister);
  };

  return (
    <>
      <span className="header__personalAccountText" onClick={toggleRegister}>
        Зарегистрироваться
      </span>

      {isRegister && (
        <div className="registerBG">
          <div className="popUpRegistration">
            <div className="formRegistration">
              <div className="form-header">
                <h1 className="form-title">Регистрация</h1>
                <button
                  className="form-closeButtonRegistration"
                  onClick={() => {
                    setIsRegister(false);
                  }}
                ></button>
              </div>
              <div className="form-registration">
                <Formik
                  initialValues={{ email: '', name: '', phone: '', password: '' }}
                  validate={values => {
                    const errors = {};
                    if (!values.email) {
                      errors.email = 'Поле должно быть заполнено!';
                    }
                    // else if (
                    //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    // ) {
                    //   errors.email = 'Некорректный email';
                    // }

                    if (!values.name) {
                      errors.name = 'Поле должно быть заполнено!';
                    }

                    if (!values.phone) {
                      errors.phone = 'Поле должно быть заполнено!';
                    }

                    if (!values.password) {
                      errors.password = 'Поле должно быть заполнено!';
                    }

                    return errors;
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    console.error('VALUES', values);

                    axios
                      .post(`/api/createUser`, values)
                      .then(response => {
                        console.log('RESP', response.data);
                        const user = response.data;
                        if (user) {
                          setUser(user);
                        }
                      })
                      .finally(() => {
                        setIsRegister(false);
                      });
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
                              placeholder="Имя"
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
                      <Field name="phone">
                        {({ field, form: { touched, errors }, meta }) => (
                          <div className="form-item">
                            <input
                              type="text"
                              className="form-input"
                              placeholder="Телефон"
                              {...field}
                            />
                            {meta.touched && meta.error && (
                              <div className="field-error">{meta.error}</div>
                            )}
                          </div>
                        )}
                      </Field>
                      <Field name="password">
                        {({ field, form: { touched, errors }, meta }) => (
                          <div className="form-item">
                            <input
                              type="password"
                              className="form-input"
                              placeholder="Введите пароль"
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
                        Регистрация
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
          <div
            className="clickOutsideCatcher"
            onClick={() => {
              setIsRegister(false);
            }}
          ></div>
        </div>
      )}
    </>
  );
};
