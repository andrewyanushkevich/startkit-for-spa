/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import 'antd/dist/antd.css';
import TrainingTable from './blocks/TrainingTable';

class App extends Component {
  render() {
    return <TrainingTable />;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
