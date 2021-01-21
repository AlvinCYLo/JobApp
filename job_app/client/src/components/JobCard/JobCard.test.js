import React from 'react';
import renderer from 'react-test-renderer';
import JobCard from './JobCard';

it('renders JobCard correctly', () => {
  const tree = renderer.create(<JobCard />).toJSON();
  expect(tree).toMatchSnapshot();
});
