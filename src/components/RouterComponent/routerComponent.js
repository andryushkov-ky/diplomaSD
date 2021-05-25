import React, { useEffect, useState } from 'react';
import { Link, Route, useHistory, useLocation } from 'react-router-dom';
import { Home } from '../Home/home';
import { Footer } from '../Footer/footer';
import { Header } from '../Header/header';
import { PersonalAccountContent } from '../PersonalAccountContent/personalAccountContent';
import { Chapter } from '../Chapter/chapter';
import { contentMap } from '../Chapter/contentMap';
import { Sidebar } from '../Sidebar/sidebar';
import { Page } from '../Page/page';
import { HTMLpageConstructor, HTMLquestions } from '../Page/HTML/HTMLpageConstructor';
import { Test } from '../Test/test';

export const RouterComponent = () => {
  const [user, setUser] = useState(null);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      setUser(user);
    }
  }, [location.pathname]);

  const logOut = () => {
    setUser(null);
    localStorage.removeItem('user');
    history.push('/');
  };

  return (
    <div className="general">
      <Route exact path="/">
        <Home />
        <Footer />
      </Route>
      {user ? (
        <>
          <Route path="/personalAccount">
            <Header user={user} logOut={logOut} />
            <PersonalAccountContent user={user} />
            <Footer />
          </Route>
          <Route exact path="/aboutHTML">
            <Header user={user} logOut={logOut} />
            <Chapter {...contentMap.aboutHTML} />
            <Footer />
          </Route>
          <Route exact path="/aboutHTML/HTML_1.0">
            <Header user={user} logOut={logOut} />
            <div className="contentPage">
              <Page user={user} {...HTMLpageConstructor['HTML_1.0']} />
              <Sidebar active={'html1'} links={contentMap.aboutHTML.parts} />
            </div>
            <Footer />
          </Route>
          <Route exact path="/aboutHTML/HTML_1.1">
            <Header user={user} logOut={logOut} />
            <div className="contentPage">
              <Page user={user} {...HTMLpageConstructor['HTML_1.1']} />
              <Sidebar active={'html2'} links={contentMap.aboutHTML.parts} />
            </div>
            <Footer />
          </Route>
          <Route exact path="/aboutHTML/HTML_1.2">
            <Header user={user} logOut={logOut} />
            <div className="contentPage">
              <Page user={user} {...HTMLpageConstructor['HTML_1.2']} />
              <Sidebar active={'html3'} links={contentMap.aboutHTML.parts} />
            </div>
            <Footer />
          </Route>
          <Route exact path="/aboutHTML/HTML_1.3">
            <Header user={user} logOut={logOut} />
            <div className="contentPage">
              <Page user={user} {...HTMLpageConstructor['HTML_1.3']} />
              <Sidebar active={'html4'} links={contentMap.aboutHTML.parts} />
            </div>
            <Footer />
          </Route>
          <Route exact path="/aboutHTML/HTML_1.4">
            <Header user={user} logOut={logOut} />
            <div className="contentPage">
              <Page user={user} {...HTMLpageConstructor['HTML_1.4']} />
              <Sidebar active={'html5'} links={contentMap.aboutHTML.parts} />
            </div>
            <Footer />
          </Route>
          <Route exact path="/aboutHTML/HTML_test">
            <Header user={user} logOut={logOut} />
            <Test id={'aboutHTML'} user={user} title={'Тест на знание HTML'} questions={HTMLquestions} />
            <Footer />
          </Route>
        </>
      ) : (
        <>
          <Route path="/personalAccount">
            <div className="needToLogin">
              <Link to={'/'}>
                Чтобы получить доступ к контенту вам нужно Зарегистрироваться или
                Авторизоваться
              </Link>
            </div>
          </Route>
          <Route path="/aboutHTML">
            <div className="needToLogin">
              <Link to={'/'}>
                Чтобы получить доступ к контенту вам нужно Зарегистрироваться или
                Авторизоваться
              </Link>
            </div>
          </Route>
        </>
      )}
    </div>
  );
};
