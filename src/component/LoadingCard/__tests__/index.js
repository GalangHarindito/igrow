import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import LoadingCard from '../LoadingCard';


describe('src/component/Card', () => {
  const data = [
    {
      name : 'test',
      gender: 'test',
      phone: 'test',
      picture: { large:'test' },
      location: { city: 'test', country: 'test'}
    },
    {
      name : 'test',
      gender: 'test',
      phone: 'test',
      picture: { large:'test' },
      location: { city: 'test', country: 'test'}
    }
  ];

  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<LoadingCard data={data} />);
    expect(tree).toMatchSnapshot();
  });

});