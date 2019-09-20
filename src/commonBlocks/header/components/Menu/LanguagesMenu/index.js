import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Menu } from 'antd';

const { Item: MenuItem } = Menu;

const LanguagesMenu = ({ handleLanguageSelected }) => (
  <Menu onClick={handleLanguageSelected}>
    <MenuItem key="en">
      <Icon type="flag" />
      English
    </MenuItem>
    <MenuItem key="fr">
      <Icon type="flag" />
      French
    </MenuItem>
    <MenuItem key="es">
      <Icon type="flag" />
      Spanish
    </MenuItem>
  </Menu>
);

LanguagesMenu.propTypes = {
  handleLanguageSelected: PropTypes.func.isRequired,
};

export default LanguagesMenu;
