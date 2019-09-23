import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Icon, Menu } from 'antd';
import { StyleMenuWrapper, StyledAntMenu } from './styles';
import LanguagesMenu from './LanguagesMenu';
import {
  HOME_PAGE_ROUTE,
  NOTIFICATIONS_PAGE_ROUTE,
  CONVERSATIONS_PAGE_ROUTE,
} from '../../../../constants/routesNames';

const { Item: MenuItem } = Menu;

class HeaderMenu extends PureComponent {
  handleLanguageSelected = ({ key }) => {
    console.log(`${key}  language  selected`);
  };

  render() {
    const { handleMenuClick, selectedMenuItem } = this.props;

    return (
      <StyleMenuWrapper>
        <StyledAntMenu
          onClick={handleMenuClick}
          selectedKeys={[selectedMenuItem]}
          mode="horizontal"
        >
          <MenuItem key={HOME_PAGE_ROUTE}>
            <Icon type="home" theme="filled" />
          </MenuItem>
          <MenuItem key={NOTIFICATIONS_PAGE_ROUTE}>
            <Icon type="bell" theme="filled" />
          </MenuItem>
          <MenuItem key={CONVERSATIONS_PAGE_ROUTE}>
            <Icon type="notification" theme="filled" />
          </MenuItem>
          <MenuItem key="languages" disabled>
            <Dropdown
              overlay={
                <LanguagesMenu
                  handleLanguageSelected={this.handleLanguageSelected}
                />
              }
            >
              <Icon type="flag" theme="filled" />
            </Dropdown>
          </MenuItem>
        </StyledAntMenu>
      </StyleMenuWrapper>
    );
  }
}

HeaderMenu.propTypes = {
  handleMenuClick: PropTypes.func.isRequired,
  selectedMenuItem: PropTypes.string.isRequired,
};

export default HeaderMenu;
