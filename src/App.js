import React from 'react';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import store from './store/store';
import Home from './pages/home';
import Notifications from './pages/notifications';
import Conversations from './pages/conversations';
import Header from './commonBlocks/header/containers';
import Footer from './commonBlocks/footer';
import messagesFR from './translations/fr.json';
import messagesEN from './translations/en.json';
import 'antd/dist/antd.css';

const GlobalStyle = createGlobalStyle`
  body {
    background: #f3f7f9!important;  //@todo try refactor this
  }
`;

const messages = {
  fr: messagesFR,
  en: messagesEN,
};

// eslint-disable-next-line no-restricted-globals
const language = location.pathname.split('/')[1] || 'en';

const App = () => (
  <IntlProvider locale={language} messages={messages[language]}>
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route
            path={language === 'en' ? '/' : `/${language}/`}
            component={Home}
          />
          <Route
            path={`/${messages}/notifications`}
            component={Notifications}
          />
          <Route path="/conversations" component={Conversations} />
          <Redirect from="/" to={`${language}/`} />
        </Switch>
        <Footer />
      </Provider>
    </BrowserRouter>
  </IntlProvider>
);

export default App;
