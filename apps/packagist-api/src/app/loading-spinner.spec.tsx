import * as React from 'react';
import { render, cleanup } from 'react-testing-library';

import { LoadingSpinner } from './loading-spinner';

describe('LoadingSpinner', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<LoadingSpinner />);
    expect(baseElement).toBeTruthy();
  });

  it('renders without crashing', () => {
    const { getByText } = render(<LoadingSpinner />);
    expect(getByText('Welcome to packagist-api!')).toBeTruthy();
  });
});
