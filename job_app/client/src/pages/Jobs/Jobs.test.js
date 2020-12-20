import React from 'react';
import renderer from 'react-test-renderer';
import Jobs from './Jobs';

it('renders correctly', () => {
  const tree = renderer.create(<Jobs />).toJSON();
  expect(tree).toMatchSnapshot();
});
