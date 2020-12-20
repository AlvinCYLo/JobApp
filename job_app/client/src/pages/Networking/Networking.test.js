import React from 'react';
import renderer from 'react-test-renderer';
import Networking from './Networking';

it('renders correctly', () => {
  const tree = renderer.create(<Networking />).toJSON();
  expect(tree).toMatchSnapshot();
});
