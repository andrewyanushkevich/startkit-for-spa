/* eslint-disable import/no-extraneous-dependencies */
import { configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import { toMatchImageSnapshot } from 'jest-image-snapshot';

expect.extend({ toMatchImageSnapshot });
configure({ adapter: new Adapter() });
