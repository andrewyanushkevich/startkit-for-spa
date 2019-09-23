import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { FormattedHTMLMessage } from 'react-intl';

import TrainingTable from '../../../../commonBlocks/TrainingTable';
import Filter from '../../../../commonBlocks/Filter';
import ViewDetail from '../ViewDetail';
import RegisterEmployee from '../RegisterEmployee/index.jsx';
import { Wrapper, ButtonsWrapper } from './styles';

class RegisterTraining extends PureComponent {
  state = {
    isDetailVisible: false,
    isRegisterEmployeeVisible: false,
  };

  handleShowModal = e => {
    const { id } = e.target.dataset;
    switch (id) {
      case 'View Detail':
        this.setState({ isDetailVisible: true });
        break;
      case 'Register employee':
        this.setState({ isRegisterEmployeeVisible: true });
        break;
    };
  };

  handleCloseModal = e => {
    const { id } = e.target.dataset;
    switch (id) {
      case 'View Detail':
        this.setState({ isDetailVisible: false });
        break;
      case 'Register employee':
        this.setState({ isRegisterEmployeeVisible: false });
        break;
    };
  };

  render() {
    const { isDetailVisible, isRegisterEmployeeVisible } = this.state;
    return (
      <Wrapper>
        <div>
          <Filter />
          <TrainingTable />
        </div>
        <ButtonsWrapper>
          <Button onClick={this.handleShowModal} data-id="View Detail">
            <FormattedHTMLMessage
              id="viewdetail"
              values={{ what: 'react-intl' }}
            />
          </Button>
          <Button onClick={this.handleShowModal} data-id="Register employee">
            <FormattedHTMLMessage
              id="register_employee"
              values={{ what: 'react-intl' }}
            />
          </Button>
          <Button>Register</Button>
          <Button>Close</Button>
        </ButtonsWrapper>
        <ViewDetail
          visible={isDetailVisible}
          handleShowDetail={this.handleShowDetail}
          handleCloseModal={this.handleCloseModal}
        />
        <RegisterEmployee
          visible={isRegisterEmployeeVisible}
          handleShowModal={this.handleShowModal}
          handleCloseModal={this.handleCloseModal}
        />
      </Wrapper>
    );
  }
}

RegisterTraining.propTypes = {};

export default RegisterTraining;
