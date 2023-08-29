import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'src/redux';
import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(getByText(/Currency amount/gi)).toBeTruthy();
  });
});
