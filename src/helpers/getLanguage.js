import {
  DEFAULT_LANGUAGE_KEY,
  ALLOWED_LANGUAGES_LIST,
} from '../constants/languages';

export default () => {
  const langFromUrl = window.location.pathname.split('/')[1];

  if (ALLOWED_LANGUAGES_LIST.includes(langFromUrl)) {
    return langFromUrl;
  }

  return DEFAULT_LANGUAGE_KEY;
};
