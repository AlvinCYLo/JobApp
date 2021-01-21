import React from 'react';
import renderer from 'react-test-renderer';
import JobButton from './JobButton';

it('renders JobButton correctly', () => {
  const tree = renderer.create(<JobButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
