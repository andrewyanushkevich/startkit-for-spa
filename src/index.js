/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import 'antd/dist/antd.css';
import Home from './pages/page1/index';

class App extends Component {
  render() {
    return <Home />;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
