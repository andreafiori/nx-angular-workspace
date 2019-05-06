import * as React from 'react';
import { render, cleanup } from 'react-testing-library';

import { PackageList } from './package-list';

describe('LoadingSpinner', () => {
  const props = {
    results: [
      {
        name: 'package 1',
        url: 'http://packagist.example.org/',
        description: 'package 1 description',
        download: 'download',
      }
    ]
  };

  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<PackageList {...props} />);
    expect(baseElement).toBeTruthy();
  });

  it('renders without crashing', () => {
    const { getByText } = render(<PackageList {...props} />);
    expect(getByText('Welcome to packagist-api!')).toBeTruthy();
  });
  
  // TODO: migrate from Enzyme to Cypress
  /*
  const packageList = shallow(<PackageList {...props} />);
  it('renders with one or more packages', () => {
    packageList.find('h3').contains('' + props.results.name);
    packageList.find('p').contains('' + props.results.description);
  });
  
  // A second approach of testin using ReactDOM.render
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PackageList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders with one or more packages', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PackageList packages={props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  */
});
