import React, { useState } from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Landing, { fetchApi } from '../Landing';

describe('src/pages/Landing', () => {

  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Landing />);
    expect(tree).toMatchSnapshot();
  });

  //it('fetch', async () => {
  //  const data = [
  //    {
  //      name : 'test',
  //      gender: 'test',
  //      phone: 'test',
  //      picture: { large:'test' },
  //      location: { city: 'test', country: 'test'}
  //    },
  //    {
  //      name : 'test',
  //      gender: 'test',
  //      phone: 'test',
  //      picture: { large:'test' },
  //      location: { city: 'test', country: 'test'}
  //    }
  //  ];
 
  //  axios.get.mockImplementationOnce(() => Promise.resolve(data));
 
  //  await expect(fetchApi()).toEqual(data);
 
  //  expect(axios.get).toHaveBeenCalledWith(
  //    `https://randomuser.me/api/?results=2`,
  //  );
  //});


});
