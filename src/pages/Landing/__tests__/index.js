import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Landing, { fetchApi, fetchUsers } from '../Landing';
import axios from 'axios';
 
jest.mock('axios');

describe('src/pages/Landing', () => {

  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Landing />);
    expect(tree).toMatchSnapshot();
  });

  test('fetch', () => {
    const fetchUsers = jest.fn().mockImplementation(() => Promise.resolve());;
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

    axios.get.mockResolvedValue(data);
    
    return fetchUsers().then(data => expect(data).toEqual(data));
  });


});
