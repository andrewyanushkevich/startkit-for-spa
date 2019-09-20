import React from 'react';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import store from './store/store';
import Home from './pages/home';
import Notifications from './pages/notifications';
import Conversations from './pages/conversations';
import Header from './commonBlocks/header/containers';
import Footer from './commonBlocks/footer';
import 'antd/dist/antd.css';

const GlobalStyle = createGlobalStyle`
  body {
    background: #f3f7f9!important;  //@todo try refactor this
  }
`;

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/notifications" component={Notifications} />
        <Route path="/conversations" component={Conversations} />
      </Switch>
      <Footer />
    </Provider>
  </BrowserRouter>
);

export default App;
