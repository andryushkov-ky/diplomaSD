import React, { useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './auth.css';

export const Auth = ({ setUser }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);

  const toggleRegister = () => {
    setIsAuth(!isAuth);
  };

  return (
    <>
      <span className="header__personalAccountText" onClick={toggleRegister}>
        Войти
      </span>

      {isAuth && (
        <div className="registerBG">
          <div className="popUpEnter">
            <div className="formEnter">
              <div className="form-header">
                <h1 className="form-title">Войти</h1>
                <button
                  className="form-closeButtonRegistration"
                  onClick={() => {
                    setIsAuth(false);
                  }}
                ></button>
              </div>
              <div className="form-registration">
                <Formik
                  initialValues={{ email: '', password: '' }}
                  validate={values => {
                    const errors = {};
                    if (!values.email) {
                      errors.email = 'Поле должно быть заполнено!';
                    }

                    if (!values.password) {
                      errors.password = 'Поле должно быть заполнено!';
                    }

                    return errors;
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    axios
                      .post(`/api/getUser`, values)
                      .then(response => {
                        console.log('RESP', response.data);
                        const user = response.data[0];
                        if (user) {
                          setUser(user);
                          setIsAuth(false);
                        } else {
                          setIsNotFound(true);
                        }
                      })
                      .finally(() => {
                        setSubmitting(false);
                      });
                  }}
                >
                  {({ isSubmitting }) => (
                    <Form>
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
                        Войти
                      </button>
                      {isNotFound && (
                        <div className="notFoundUser">Такой пользователь не найден</div>
                      )}
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
          <div
            className="clickOutsideCatcher"
            onClick={() => {
              setIsAuth(false);
            }}
          />
        </div>
      )}
    </>
  );
};
