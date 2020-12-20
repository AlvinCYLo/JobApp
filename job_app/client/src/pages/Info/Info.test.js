import React from 'react';
import renderer from 'react-test-renderer';
import Info from './Info';

it('renders Info page correct', () => {
  const tree = renderer.create(<Info />).toJSON();
  expect(tree).toMatchSnapshot();
});
