/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Icon } from 'antd';

import {
  StyledTable,
  IconCell,
  HeaderCell,
  TextCell,
  NumberCell,
  DateCell,
} from './styles';

const columns = [
  {
    title: <HeaderCell>online</HeaderCell>,
    dataIndex: 'online',
    key: 'online',
    render: value =>
      value ? (
        <IconCell>
          <Icon type="check" style={{ fontSize: '24px', color: 'green' }} />
        </IconCell>
      ) : null,
    sorter: (a, b) => b.online - a.online,
  },
  {
    title: <HeaderCell>Registered</HeaderCell>,
    dataIndex: 'registered',
    key: 'registered',
    render: value =>
      value ? (
        <IconCell>
          <Icon type="check" style={{ fontSize: '24px', color: 'green' }} />
        </IconCell>
      ) : null,
    sorter: (a, b) => b.registered - a.registered,
  },
  {
    title: <HeaderCell>Training Code</HeaderCell>,
    dataIndex: 'trainingCode',
    key: 'trainingCode',
    render: (row, record) => (
      <TextCell transparent={record.availableAdmissions === 0}>{row}</TextCell>
    ),
    sorter: (a, b) => b.trainingCode - a.trainingCode,
  },
  {
    title: <HeaderCell>Training Title</HeaderCell>,
    dataIndex: 'trainingTitle',
    key: 'trainingTitle',
    render: (row, record) => (
      <TextCell transparent={record.availableAdmissions === 0}>{row}</TextCell>
    ),
    sorter: (a, b) => b.trainingTitle - a.trainingTitle,
  },
  {
    title: <HeaderCell>Starting Date</HeaderCell>,
    dataIndex: 'startingDate',
    key: 'startingDate',
    render: (row, record) => (
      <DateCell transparent={record.availableAdmissions === 0}>{row}</DateCell>
    ),
    sorter: (a, b) => b.startingDate - a.startingDate,
  },
  {
    title: <HeaderCell>Starting Time</HeaderCell>,
    dataIndex: 'startingTime',
    key: 'startingTime',
    render: (row, record) => (
      <NumberCell transparent={record.availableAdmissions === 0}>
        {row}
      </NumberCell>
    ),
    sorter: (a, b) => b.startingTime - a.startingTime,
  },
  {
    title: <HeaderCell>Finish Time</HeaderCell>,
    dataIndex: 'finishTime',
    key: 'finishTime',
    render: (row, record) => (
      <NumberCell transparent={record.availableAdmissions === 0}>
        {row}
      </NumberCell>
    ),
    sorter: (a, b) => b.finishTime - a.finishTime,
  },
  {
    title: <HeaderCell>Available Admissions</HeaderCell>,
    dataIndex: 'availableAdmissions',
    key: 'availableAdmissions',
    render: (row, record) =>
      record.availableAdmissions === 0 ? (
        <NumberCell
          style={{ color: 'red' }}
          transparent={record.availableAdmissions === 0}
        >
          Full
        </NumberCell>
      ) : (
        <NumberCell transparent={record.availableAdmissions === 0}>
          {row}
        </NumberCell>
      ),
    sorter: (a, b) => b.availableAdmissions - a.availableAdmissions,
  },
  {
    title: <HeaderCell>Maximum Admissions</HeaderCell>,
    dataIndex: 'maximumAdmissions',
    key: 'maximumAdmissions',
    render: (row, record) => (
      <NumberCell transparent={record.availableAdmissions === 0}>
        {row}
      </NumberCell>
    ),
    sorter: (a, b) => b.maximumAdmissions - a.maximumAdmissions,
  },
  {
    title: <HeaderCell>Site</HeaderCell>,
    dataIndex: 'site',
    key: 'site',
    render: (row, record) => (
      <TextCell transparent={record.availableAdmissions === 0}>{row}</TextCell>
    ),
    sorter: (a, b) => b.site - a.site,
  },
];

/* const recieveTrainingColumns = [
  {
    title: <HeaderCell>online</HeaderCell>,
    dataIndex: 'online',
    key: 'online',
    render: value =>
      value ? (
        <Icon type="check" style={{ fontSize: '24px', color: 'green' }} />
      ) : null,
    sorter: (a, b) => b.online - a.online,
  },
  {
    title: <HeaderCell>Registered</HeaderCell>,
    dataIndex: 'registered',
    key: 'registered',
    render: value =>
      value ? (
        <Icon type="check" style={{ fontSize: '24px', color: 'green' }} />
      ) : null,
    sorter: (a, b) => b.registered - a.registered,
  },
  {
    title: <HeaderCell>Training Code</HeaderCell>,
    dataIndex: 'trainingCode',
    key: 'trainingCode',
    render: (row, record) => (
      <TextCell transparent={record.availableAdmissions === 0}>{row}</TextCell>
    ),
    sorter: (a, b) => b.trainingCode - a.trainingCode,
  },
  {
    title: <HeaderCell>Training Title</HeaderCell>,
    dataIndex: 'trainingTitle',
    key: 'trainingTitle',
    render: row => <p>{row}</p>,
    sorter: (a, b) => b.trainingTitle - a.trainingTitle,
  },
  {
    title: <HeaderCell>Starting Date</HeaderCell>,
    dataIndex: 'startingDate',
    key: 'startingDate',
    render: row => <p>{row}</p>,
    sorter: (a, b) => b.startingDate - a.startingDate,
  },
  {
    title: <HeaderCell>Starting Time</HeaderCell>,
    dataIndex: 'startingTime',
    key: 'startingTime',
    render: row => <p>{row}</p>,
    sorter: (a, b) => b.startingTime - a.startingTime,
  },
  {
    title: <HeaderCell>Finish Time</HeaderCell>,
    dataIndex: 'finishTime',
    key: 'finishTime',
    render: row => <p>{row}</p>,
    sorter: (a, b) => b.finishTime - a.finishTime,
  },
  {
    title: <HeaderCell>Site</HeaderCell>,
    dataIndex: 'site',
    key: 'site',
    render: row => <p>{row}</p>,
    sorter: (a, b) => b.site - a.site,
  },
]; */

const d = new Date();

const dataSource = [
  {
    key: 1,
    online: true,
    registered: true,
    trainingCode: 'DEMO',
    trainingTitle: 'DEMO',
    startingDate: d.toDateString(),
    startingTime: d.toLocaleTimeString(),
    finishTime: d.toLocaleTimeString(),
    availableAdmissions: 0,
    maximumAdmissions: 999,
    site: 'Site 1',
  },
  {
    key: 2,
    online: true,
    registered: false,
    trainingCode: 'DEMO',
    trainingTitle: 'DEMO',
    startingDate: '',
    startingTime: '',
    finishTime: '',
    availableAdmissions: 994,
    maximumAdmissions: 999,
    site: 'Site 1',
  },
  {
    key: 3,
    online: true,
    registered: true,
    trainingCode: 'DEMO',
    trainingTitle: 'DEMO',
    startingDate: '',
    startingTime: '',
    finishTime: '',
    availableAdmissions: 992,
    maximumAdmissions: 999,
    site: 'Site 1',
  },
  {
    key: 4,
    online: true,
    registered: true,
    trainingCode: 'DEMO',
    trainingTitle: 'DEMO',
    startingDate: '',
    startingTime: '',
    finishTime: '',
    availableAdmissions: 17,
    maximumAdmissions: 20,
    site: 'Site 1',
  },
];

class TrainingTable extends Component {
  render() {
    const newData = dataSource.filter(elem => elem.online && elem.registered);
    return (
      <StyledTable
        style={{ width: '60%' }}
        bordered
        columns={columns}
        dataSource={newData}
        onCell={() => ({
          onClick: () => {},
          onDoubleClick: () => {},
        })}
      />
    );
  }
}

export default TrainingTable;
