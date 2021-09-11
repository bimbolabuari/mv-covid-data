import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import App from '../App';

describe('Check if all components are rendered', () => {
  test('Renders NavBar', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(screen.getByText('most views')).toBeInTheDocument();
  });
  test('Renders section title', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(screen.getByText('365 countries')).toBeInTheDocument();
  });
});
