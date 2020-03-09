import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './app.scss';
import HomePage from './pages/homepage/HomePage';
import Shop from './pages/shop/Shop';
import Header from './components/header/header';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </div>
  );
};

export default App;
