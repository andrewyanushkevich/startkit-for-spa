import {
  CONVERSATIONS_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  NOTIFICATIONS_PAGE_ROUTE,
} from '../constants/routesNames';

export default () => {
  const { pathname } = window.location;

  if (pathname.includes(NOTIFICATIONS_PAGE_ROUTE)) {
    return NOTIFICATIONS_PAGE_ROUTE;
  }

  if (pathname.includes(CONVERSATIONS_PAGE_ROUTE)) {
    return CONVERSATIONS_PAGE_ROUTE;
  }

  return HOME_PAGE_ROUTE;
};
