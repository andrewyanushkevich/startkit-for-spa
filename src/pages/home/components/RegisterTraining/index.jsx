import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import TrainingTable from '../../../../commonBlocks/TrainingTable';
import Filter from '../../../../commonBlocks/Filter';
import ViewDetail from '../ViewDetail';
import { Wrapper, ButtonsWrapper } from './styles';

class RegisterTraining extends PureComponent {
  state = {
    isDetailVisible: false,
  };

  handleShowDetail = () => {
    this.setState({ isDetailVisible: true });
  };

  handleCloseModal = e => {
    const { id } = e.target.dataset;
    switch (id) {
      case 'View Detail':
        this.setState({ isDetailVisible: false });
    }
  };

  render() {
    const { isDetailVisible } = this.state;
    return (
      <Wrapper>
        <div>
          <Filter />
          <TrainingTable />
        </div>
        <ButtonsWrapper>
          <Button onClick={this.handleShowDetail} data-id="View Detail">
            View Detail
          </Button>
          <Button>Register employee(s)</Button>
          <Button>Register</Button>
          <Button>Close</Button>
        </ButtonsWrapper>
        <ViewDetail
          visible={isDetailVisible}
          handleShowDetail={this.handleShowDetail}
          handleCloseModal={this.handleCloseModal}
        />
      </Wrapper>
    );
  }
}

RegisterTraining.propTypes = {};

export default RegisterTraining;
