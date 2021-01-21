import React from 'react';
import renderer from 'react-test-renderer';
import JobButtonRow from './JobButtonRow';

it('renders JobButtonRow correctly', () => {
  const tree = renderer.create(<JobButtonRow />).toJSON();
  expect(tree).toMatchSnapshot();
});
