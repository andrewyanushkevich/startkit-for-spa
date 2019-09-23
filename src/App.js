import React from 'react';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import store from './store/store';
import Home from './pages/home';
import Notifications from './pages/notifications';
import Conversations from './pages/conversations';
import Header from './commonBlocks/Header/containers';
import Footer from './commonBlocks/Footer';
import translations from './constants/translations';
import getLanguage from './helpers/getLanguage';
import { DEFAULT_LANGUAGE_KEY } from './constants/languages';
import 'antd/dist/antd.css';

const GlobalStyle = createGlobalStyle`
  body {
    background: #f3f7f9!important;  //@todo try refactor this
  }
`;

const language = getLanguage();

// @todo add routes to constants
const App = () => (
  <IntlProvider locale={language} messages={translations[language]}>
    <BrowserRouter
      basename={`${language === DEFAULT_LANGUAGE_KEY ? '' : language}`}
    >
      <Provider store={store}>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route path="/notifications" component={Notifications} />
          <Route path="/conversations" component={Conversations} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </Provider>
    </BrowserRouter>
  </IntlProvider>
);

export default App;
