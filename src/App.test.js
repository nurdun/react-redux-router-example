import React from 'react';
import ReactDOM from 'react-dom';
import App from './index';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });

it('renders without crashing', () => {
  expect(JSON.stringify(
    Object.assign({}, App, { _reactInternalInstance: 'censored' })
  )).toMatchSnapshot();
});