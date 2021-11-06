import React from 'react';

export default React;
export * from 'react';
export const useState = jest.fn(v => [v, jest.fn()]);
