import React from 'react';
import Signin from '../features/auth/signin';

export default () => (
  <div className="brandingColor">
    <header className="centerContainer flexHorizontalBetween">
      <ul>
        <li>
          <a className="brand" href="#">Rejection</a>
        </li>
      </ul>
      <Signin />
    </header>
  </div>
);
