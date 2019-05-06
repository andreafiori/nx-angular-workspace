import * as React from 'react';
import { Component } from 'react';


export class PackageList extends Component<{}, {}> {

  packages: {
    results: any;
  }

  constructor(props) {
    super(props);

    this.packages = props.packages;
  }

  render() {
    if (typeof this.packages !== 'undefined' && this.packages.results && this.packages.results.length > 0) {
      return this.packages.results.map((pack) =>
        <div key={pack.name}>
          <h3>
            <a href={ pack.url } title="View package details on packagist.org" target="_blank" rel="noopener noreferrer">
              { pack.name }
            </a>
          </h3>
          <p>{ pack.description }</p>
          <div><i className="fa fa-download" aria-hidden="true"></i> { pack.downloads } <i className="fa fa-star" aria-hidden="true"></i> { pack.favers }</div>
          <hr />
        </div>
      );
    }

    return (
      <div className="alert alert-warning">
        <h3 className="alert-heading">No packages</h3>
        <p>No PHP repositories were found. Please do a new research.</p>
      </div>
    );
  }
}
