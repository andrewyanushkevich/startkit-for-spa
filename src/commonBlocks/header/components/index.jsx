import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router';
import TrainingsDropdown from './TrainingsDropdown';
import Menu from './Menu';
import { StyledHeaderWrapper } from './styles';
import { HOME_PAGE_ROUTE } from '../../../constants/routesNames';
import getCurrentRoute from '../../../helpers/getCurrentRoute';

class Header extends PureComponent {
  state = {
    currentRoute: '',
  };

  componentDidMount() {
    this.setState({
      currentRoute: getCurrentRoute(),
    });
  }

  componentDidUpdate(prevProps) {
    const {
      location: { pathname },
    } = this.props;

    if (prevProps.location.pathname !== pathname) {
      this.setState({
        currentRoute: getCurrentRoute(),
      });
    }
  }

  handleMenuClick = ({ key }) => {
    const { history } = this.props;

    history.push(key);
  };

  render() {
    const { currentRoute } = this.state;

    return (
      <StyledHeaderWrapper>
        {currentRoute === HOME_PAGE_ROUTE && (
          <TrainingsDropdown handleMenuClick={this.handleMenuClick} />
        )}
        <Menu
          handleMenuClick={this.handleMenuClick}
          selectedMenuItem={currentRoute}
        />
      </StyledHeaderWrapper>
    );
  }
}

Header.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
};

export default withRouter(Header);
