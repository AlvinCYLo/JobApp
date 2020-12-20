import React from 'react';
import renderer from 'react-test-renderer';
import Applied from './Applied';

it('renders Applied page correctly', () => {
  const tree = renderer.create(<Applied />).toJSON();
  expect(tree).toMatchSnapshot();
});
