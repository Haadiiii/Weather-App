import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/Store';
import Nav from '../components/Nav';

test('testin navigation', () => {
  const nav = render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
  );
  expect(nav).toMatchSnapshot();
});
