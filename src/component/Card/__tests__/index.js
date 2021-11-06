import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Card from '../Card';


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
    const tree = shallow.render(<Card data={data} />);
    expect(tree).toMatchSnapshot();
  });

  test('data', () => {
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
    const result = Card({
      ...Card.defaultProps, data: data
    });
  });

});
