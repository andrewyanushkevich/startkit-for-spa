import React from 'react';

import 'antd/dist/antd.css';
import TrainingTable from '../../blocks/TrainingTable';
import Filter from './components/Filter';
import { Wrapper } from './styles';

const Home = () => (
  <Wrapper>
    <Filter />
    <TrainingTable />
  </Wrapper>
);

export default Home;
