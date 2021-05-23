import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from '../Home/home';
import { Footer } from '../Footer/footer';

export const Router = () => {
  return (
    <BrowserRouter>
      <div className="general">
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/news">
          <h1>News!</h1>
        </Route>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
