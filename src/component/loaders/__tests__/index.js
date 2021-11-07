import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Loaders from '../Loaders';

describe('src/components//Button', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Loaders />);
    expect(tree).toMatchSnapshot();
  });
});