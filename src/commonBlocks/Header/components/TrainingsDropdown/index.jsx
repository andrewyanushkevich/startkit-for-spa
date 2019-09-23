import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Dropdown, Icon } from 'antd';
import { StyledTrainingDropdownWrapper } from './styles';
import {
  REGISTER_PAGE_ROUTE,
  RECEIVE_PAGE_ROUTE,
} from '../../../../constants/routesNames';

const TrainingsDropdown = ({ handleMenuClick }) => {
  const DropDownMenu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key={REGISTER_PAGE_ROUTE}>Register to the training</Menu.Item>
      <Menu.Item key={RECEIVE_PAGE_ROUTE}>Receive a training</Menu.Item>
    </Menu>
  );

  return (
    <StyledTrainingDropdownWrapper>
      <Dropdown overlay={DropDownMenu}>
        <Icon type="menu" />
      </Dropdown>
    </StyledTrainingDropdownWrapper>
  );
};

TrainingsDropdown.propTypes = {
  handleMenuClick: PropTypes.func.isRequired,
};

export default TrainingsDropdown;
