import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Menu } from 'antd';
import {
  ENGLISH_LANGUAGE_KEY,
  SPANISH_LANGUAGE_KEY,
  FRENCH_LANGUAGE_KEY,
} from '../../../../../constants/languages';

const { Item: MenuItem } = Menu;

const LanguagesMenu = ({ handleLanguageSelected }) => (
  <Menu onClick={handleLanguageSelected}>
    <MenuItem key={ENGLISH_LANGUAGE_KEY}>
      <Icon type="flag" />
      English
    </MenuItem>
    <MenuItem key={FRENCH_LANGUAGE_KEY}>
      <Icon type="flag" />
      French
    </MenuItem>
    <MenuItem key={SPANISH_LANGUAGE_KEY}>
      <Icon type="flag" />
      Spanish
    </MenuItem>
  </Menu>
);

LanguagesMenu.propTypes = {
  handleLanguageSelected: PropTypes.func.isRequired,
};

export default LanguagesMenu;
