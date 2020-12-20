import React from 'react';
import renderer from 'react-test-renderer';
import ColdEmail from './ColdEmail';

it('renders correctly', () => {
  const tree = renderer.create(<ColdEmail />).toJSON();
  expect(tree).toMatchSnapshot();
});
